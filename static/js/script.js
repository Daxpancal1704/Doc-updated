    // const dot  = document.getElementById('cursor-dot');
    // const ring = document.getElementById('cursor-ring');
    // let mx = 0, my = 0, rx = 0, ry = 0;
 
    // document.addEventListener('mousemove', e => {
    //   mx = e.clientX; my = e.clientY;
    //   dot.style.left  = mx + 'px';
    //   dot.style.top   = my + 'px';
    // });
 
    // (function animateRing() {
    //   rx += (mx - rx) * 0.14;
    //   ry += (my - ry) * 0.14;
    //   ring.style.left = rx + 'px';
    //   ring.style.top  = ry + 'px';
    //   requestAnimationFrame(animateRing);
    // })();
 
    // const nav = document.getElementById('mainNav');
    // window.addEventListener('scroll', () => {
    //   nav.classList.toggle('scrolled', window.scrollY > 20);
    // }, { passive: true });
 
    // const bar = document.getElementById('top-progress');
    // let prog = 0;
    // const tick = setInterval(() => {
    //   prog += Math.random() * 18;
    //   if (prog >= 90) { clearInterval(tick); prog = 90; }
    //   bar.style.width = prog + '%';
    // }, 120);
    // window.addEventListener('load', () => {
    //   clearInterval(tick);
    //   bar.style.width = '100%';
    //   setTimeout(() => { bar.style.opacity = '0'; bar.style.transition = 'opacity 0.5s'; }, 400);
    // });
 
    // const observer = new IntersectionObserver(entries => {
    //   entries.forEach(e => {
    //     if (e.isIntersecting) {
    //       e.target.style.opacity = '1';
    //       e.target.style.transform = 'translateY(0)';
    //     }
    //   });
    // }, { threshold: 0.1 });
 
    // document.querySelectorAll('.reveal').forEach(el => {
    //   el.style.opacity = '0';
    //   el.style.transform = 'translateY(30px)';
    //   el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    //   observer.observe(el);
    // });
 
    // document.querySelectorAll('.alert').forEach(a => {
    //   setTimeout(() => {
    //     a.style.transition = 'opacity 0.6s, max-height 0.6s';
    //     a.style.opacity = '0';
    //     a.style.maxHeight = '0';
    //     a.style.overflow = 'hidden';
    //     setTimeout(() => a.remove(), 700);
    //   }, 5000);
    // });

    // const themeToggle = document.getElementById('themeToggle');
    // const themeIcon = document.getElementById('themeIcon');

    // function applyTheme(mode) {
    //   if (mode === 'dark') {
    //     document.body.classList.add('dark-theme');
    //     themeIcon.className = 'fa-solid fa-moon';
    //   } else {
    //     document.body.classList.remove('dark-theme');
    //     themeIcon.className = 'fa-solid fa-sun';
    //   }
    // }

    // const savedTheme = localStorage.getItem('theme') || 'dark';
    // applyTheme(savedTheme);

    // if (themeToggle) {
    //   themeToggle.addEventListener('click', () => {
    //     const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    //     applyTheme(nextTheme);
    //     localStorage.setItem('theme', nextTheme);
    //   });
    // }




    /* ── Custom Cursor ── */
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function loop() {
      rx += (mx - rx) * 0.20;
      ry += (my - ry) * 0.20;
      dot.style.transform  = `translate(${mx - 3}px, ${my - 3}px)`;
      ring.style.transform = `translate(${rx - 14}px, ${ry - 14}px)`;
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, button, .card, input, select').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.width = '42px'; ring.style.height = '42px'; ring.style.opacity = '0.25'; });
      el.addEventListener('mouseleave', () => { ring.style.width = '28px'; ring.style.height = '28px'; ring.style.opacity = '0.45'; });
    });

    /* ── Sticky nav shadow on scroll ── */
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    });

    /* ── Page progress bar ── */
    const bar = document.getElementById('top-progress');
    window.addEventListener('scroll', () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = pct + '%';
    });
