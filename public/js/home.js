// =========================================================
//  home.js — Animations & interactions for the home page
// =========================================================

(function () {
  'use strict';

  /* ---------- Nav scroll effect ---------- */
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ---------- Floating gold particles ---------- */
  const container = document.getElementById('particles');
  if (container) {
    const COUNT = 22;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 3 + 1.5;
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${8 + Math.random() * 14}s;
        animation-delay: ${Math.random() * 10}s;
        opacity: 0;
      `;
      container.appendChild(p);
    }
  }

  /* ---------- Hero parallax on scroll ---------- */
  const heroImg = document.getElementById('heroImg');
  if (heroImg) {
    window.addEventListener('scroll', function () {
      const y = window.scrollY;
      heroImg.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
    }, { passive: true });
  }

  /* ---------- Intersection Observer — fade-in cards ---------- */
  const revealEls = document.querySelectorAll('.info-card, .visitor-card, .heritage-content, .stat');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
      io.observe(el);
    });
  }

  /* ---------- Hamburger menu (mobile) ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(13,10,7,0.98)';
      navLinks.style.padding = '16px 28px 24px';
      navLinks.style.backdropFilter = 'blur(14px)';
      navLinks.style.borderBottom = '1px solid #3D2E1A';
      navLinks.style.zIndex = '99';
    });
  }

  /* ---------- Counter animation for stats ---------- */
  function animateCounter(el, target, suffix) {
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(function () {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 20);
  }

  const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll('.stat-num');
        nums.forEach(function (num) {
          const text = num.textContent.trim();
          if (text === '1200+') {
            num.innerHTML = '<span id="cnt1">0</span><sup>+</sup>';
            animateCounter(document.getElementById('cnt1'), 1200, '');
          } else if (text === '6') {
            num.innerHTML = '<span id="cnt2">0</span>';
            animateCounter(document.getElementById('cnt2'), 6, '');
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) statsObserver.observe(statsEl);

})();
