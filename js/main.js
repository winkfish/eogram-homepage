(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    var open = nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (link) {
      nav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  var revealEls = document.querySelectorAll(
    '.tag, .sheet-title, .sheet-lead, .note-row, .spec-grid, .org-wrap, .card-grid, .log, .fig-label, .logo-grid, .chip-row, .stamp'
  );
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }
})();
