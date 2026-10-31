// Sound & Pronunciation Engine for Sanskritam
// Combines Web Speech API (hi-IN / sa-IN) with Web Audio API formant/bell synthesis
// and master volume / mute control.

class SanskritSoundEngine {
  private ctx: AudioContext | null = null;
  private masterVolume = 0.85;
  private muted = false;

  public setVolume(vol: number): void {
    this.masterVolume = Math.max(0, Math.min(1, vol));
    if (this.masterVolume > 0 && this.muted) {
      this.muted = false;
    }
  }

  public getVolume(): number {
    return this.masterVolume;
  }

  public setMuted(mute: boolean): void {
    this.muted = mute;
    if (mute && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  private getEffectiveVolume(): number {
    return this.muted ? 0 : this.masterVolume;
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public speakSanskrit(text: string, rate = 0.82): void {
    const effectiveVol = this.getEffectiveVolume();
    if (effectiveVol <= 0) return;

    this.playResonanceTone(261.63, 0.35);

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const cleanText = text.replace(/[✓•✦☉]/g, '').trim();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        const voices = window.speechSynthesis.getVoices();
        const indicVoice = voices.find(
          (v) =>
            v.lang.toLowerCase().includes('sa') ||
            v.lang.toLowerCase().includes('hi-in') ||
            v.lang.toLowerCase().includes('hi') ||
            v.lang.toLowerCase().includes('mr')
        );
        if (indicVoice) {
          utterance.voice = indicVoice;
          utterance.lang = indicVoice.lang;
        } else {
          utterance.lang = 'hi-IN';
        }
        utterance.rate = rate;
        utterance.pitch = 1.0;
        utterance.volume = effectiveVol;
        window.speechSynthesis.speak(utterance);
      } catch {
        // Fallback already handled by resonance tone
      }
    }
  }

  public playResonanceTone(freq = 261.63, duration = 0.45): void {
    const effectiveVol = this.getEffectiveVolume();
    if (effectiveVol <= 0) return;

    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const harmonic = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    harmonic.type = 'triangle';
    harmonic.frequency.setValueAtTime(freq * 1.5, now);

    const peak = Math.max(0.002, 0.16 * effectiveVol);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    harmonic.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    harmonic.start(now);
    osc.stop(now + duration);
    harmonic.stop(now + duration);
  }

  public playMeditationBell(): void {
    const effectiveVol = this.getEffectiveVolume();
    if (effectiveVol <= 0) return;

    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const baseFreq = 432;
    const partials = [1, 2.0, 2.756, 4.0];

    partials.forEach((ratio, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * ratio, now);

      const amp = Math.max(0.002, (0.14 * effectiveVol) / (idx + 1));
      const decay = 2.2 / (idx * 0.6 + 1);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(amp, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decay);
    });
  }

  public playDamaruBeat(index = 0): void {
    const effectiveVol = this.getEffectiveVolume();
    if (effectiveVol <= 0) return;

    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const basePitch = 190 + (index % 7) * 18;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(basePitch * 1.35, now);
    osc.frequency.exponentialRampToValueAtTime(basePitch, now + 0.14);

    const peak = Math.max(0.002, 0.22 * effectiveVol);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.24);
  }
}

export const soundEngine = new SanskritSoundEngine();
