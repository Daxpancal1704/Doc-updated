 /* ── Custom cursor ── */
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
 
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
 
    (function loop() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      dot.style.transform  = `translate(${mx - 3}px,${my - 3}px)`;
      ring.style.transform = `translate(${rx - 14}px,${ry - 14}px)`;
      requestAnimationFrame(loop);
    })();
 
    document.querySelectorAll('a,button,.card,input,select,textarea,[role="button"]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '40px'; ring.style.height = '40px'; ring.style.opacity = '0.2';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '28px'; ring.style.height = '28px'; ring.style.opacity = '0.4';
      });
    });
 
    /* ── Scroll: nav shadow + read progress ── */
    const nav = document.getElementById('mainNav');
    const bar = document.getElementById('top-progress');
 
    window.addEventListener('scroll', () => {
      const s = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      nav.classList.toggle('scrolled', s > 12);
      bar.style.width = (max > 0 ? (s / max) * 100 : 0) + '%';
    }, { passive: true });