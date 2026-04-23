/* Cursor */
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    rx += (mx - rx) * .15; ry += (my - ry) * .15;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();
  document.querySelectorAll('a, button, .tool-card, .skill-pill, .sobre-tag, .stat-card, .contato-item, .timeline-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });

  /* Nav mobile */
  function toggleMenu() {
    document.getElementById('navMobile').classList.toggle('open');
  }
  document.addEventListener('click', function(e) {
    var nav = document.getElementById('navMobile');
    var ham = document.querySelector('.hamburger');
    if (!nav.contains(e.target) && !ham.contains(e.target)) nav.classList.remove('open');
  });

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));