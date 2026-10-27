/* Sanskritam 2.0 — website behaviour: lesson progress marks, teacher view, section rail,
   word-list filter and site search. Everything degrades to plain links without script, and
   browser storage is optional: a blocked localStorage only loses the remembered state. */
(function () {
  "use strict";

  var KEY_DONE = "sanskritam2.done";
  var KEY_TEACHER = "sanskritam2.teacher";
  var root = document.documentElement;
  if (!root.lang) root.lang = "en";

  function read(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function write(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
  }
  function doneList() {
    try {
      var v = JSON.parse(read(KEY_DONE) || "[]");
      return Array.isArray(v) ? v : [];
    } catch (e) { return []; }
  }
  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }
  // Lower-case and strip Latin diacritics only (IAST ā → a); Devanagari signs are kept.
  function norm(s) {
    return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }
  var DEVA = /[\u0900-\u097F]/;

  /* ---------- progress marks ---------- */
  function paintDone() {
    var done = doneList();
    each("[data-lesson]", function (el) {
      el.classList.toggle("is-done", done.indexOf(el.getAttribute("data-lesson")) !== -1);
    });
    each("[data-done-summary]", function (el) {
      var total = Number(el.getAttribute("data-total")) || 0;
      var ids = (el.getAttribute("data-ids") || "").split(" ");
      var n = done.filter(function (id) { return ids.indexOf(id) !== -1; }).length;
      el.hidden = n === 0;
      el.textContent = "You have marked " + n + " of " + total + " lessons complete on this device.";
    });
  }

  each("[data-done-toggle]", function (btn) {
    var id = btn.getAttribute("data-done-toggle");
    var label = btn.querySelector(".label");
    function update() {
      var on = doneList().indexOf(id) !== -1;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      if (label) label.textContent = on ? "Marked complete" : "Mark lesson complete";
    }
    btn.addEventListener("click", function () {
      var list = doneList();
      var i = list.indexOf(id);
      if (i === -1) list.push(id); else list.splice(i, 1);
      write(KEY_DONE, JSON.stringify(list));
      update();
      paintDone();
    });
    update();
  });
  paintDone();

  /* ---------- teacher view: sections 22–27 ---------- */
  var teacherBtn = document.querySelector("[data-teacher-toggle]");
  function setTeacher(on, remember) {
    root.classList.toggle("teacher", on);
    if (teacherBtn) teacherBtn.setAttribute("aria-pressed", on ? "true" : "false");
    each("details.kit-sec", function (d) { d.open = on; });
    if (remember) write(KEY_TEACHER, on ? "1" : "0");
  }
  if (teacherBtn) {
    setTeacher(read(KEY_TEACHER) === "1", false);
    teacherBtn.addEventListener("click", function () {
      setTeacher(teacherBtn.getAttribute("aria-pressed") !== "true", true);
    });
  }

  /* ---------- open any collapsed block that holds the linked target ---------- */
  function revealHash() {
    var id = "";
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (e) { return; }
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    var d = el.tagName === "DETAILS" ? el : el.closest("details");
    var opened = false;
    while (d) {
      if (!d.open) { d.open = true; opened = true; }
      d = d.parentElement ? d.parentElement.closest("details") : null;
    }
    if (opened) el.scrollIntoView();
  }
  window.addEventListener("hashchange", revealHash);
  revealHash();

  /* ---------- section rail: mark the section being read ---------- */
  var railLinks = document.querySelectorAll(".toc-rail a[href^='#']");
  if (railLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    Array.prototype.forEach.call(railLinks, function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var current = null;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var link = byId[entry.target.id];
        if (!link || link === current) return;
        if (current) current.removeAttribute("aria-current");
        link.setAttribute("aria-current", "true");
        current = link;
      });
    }, { rootMargin: "-15% 0px -75% 0px" });
    Object.keys(byId).forEach(function (id) {
      var target = document.getElementById(id);
      if (target) observer.observe(target);
    });
  }

  /* ---------- word list filter ---------- */
  var wordFilter = document.getElementById("word-filter");
  if (wordFilter) {
    var rows = Array.prototype.slice.call(document.querySelectorAll("#word-table tbody tr"));
    var keys = rows.map(function (r) { return norm(r.getAttribute("data-k") || r.textContent); });
    var wordCount = document.getElementById("word-count");
    var applyFilter = function () {
      var terms = norm(wordFilter.value.trim()).split(/\s+/).filter(Boolean);
      var shown = 0;
      rows.forEach(function (r, i) {
        var hit = terms.every(function (t) { return keys[i].indexOf(t) !== -1; });
        r.hidden = !hit;
        if (hit) shown += 1;
      });
      if (wordCount) {
        wordCount.textContent = terms.length
          ? shown + " of " + rows.length + " words match"
          : rows.length + " words";
      }
    };
    wordFilter.addEventListener("input", applyFilter);
    applyFilter();
  }

  /* ---------- site search ---------- */
  var searchBox = document.getElementById("search-q");
  var results = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  if (searchBox && results && window.SK_INDEX) {
    var ORDER = ["Lesson", "Chapter", "Word", "Term", "Source"];
    var index = window.SK_INDEX.map(function (e) {
      return { e: e, k: norm(e.t + " " + (e.s || "")) };
    });
    var span = function (cls, text) {
      var el = document.createElement("span");
      el.className = cls;
      if (cls === "t" && DEVA.test(text)) {
        el.lang = "sa";
        el.className = "t dv";
      }
      el.textContent = text;
      return el;
    };
    var run = function () {
      var terms = norm(searchBox.value.trim()).split(/\s+/).filter(Boolean);
      results.textContent = "";
      if (!terms.length) {
        status.textContent = "Search lessons, words, glossary terms and sources — in English, हिन्दी, IAST or Devanagari.";
        return;
      }
      var hits = index.filter(function (x) {
        return terms.every(function (t) { return x.k.indexOf(t) !== -1; });
      });
      hits.sort(function (a, b) { return ORDER.indexOf(a.e.y) - ORDER.indexOf(b.e.y); });
      var shown = hits.slice(0, 120);
      status.textContent = hits.length
        ? hits.length + (hits.length === 1 ? " result" : " results") + (hits.length > shown.length ? " (first " + shown.length + " shown)" : "")
        : "No matches. Try a shorter word, or IAST without diacritics (samskrtam).";
      shown.forEach(function (x) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = x.e.u;
        a.appendChild(span("k", x.e.y));
        var body = document.createElement("span");
        body.appendChild(span("t", x.e.t));
        if (x.e.s) body.appendChild(span("s", x.e.s));
        a.appendChild(body);
        li.appendChild(a);
        results.appendChild(li);
      });
    };
    searchBox.addEventListener("input", run);
    run();
  }
})();
