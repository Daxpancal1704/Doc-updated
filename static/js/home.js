/* ── Counter animation ── */
document.querySelectorAll('.stat-num').forEach(el => {
  const target = +el.dataset.target;
  let current = 0;
  const step = Math.max(target / 60, 0.05);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current);
    if (current >= target) clearInterval(timer);
  }, 22);
});