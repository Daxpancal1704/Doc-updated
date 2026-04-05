document.addEventListener('DOMContentLoaded', function () {

  const textarea = document.getElementById('textInput');
  const counter  = document.getElementById('charCount');
  const bar      = document.getElementById('charBar');
  const MAX      = 5000;

  if (!textarea || !counter || !bar) {
    console.error("Element not found → check IDs");
    return;
  }

  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    const pct = (len / MAX) * 100;

    counter.textContent = len + ' / ' + MAX + ' characters';
    bar.style.width = pct + '%';

    counter.classList.remove('near-limit', 'at-limit');
    bar.style.background = 'linear-gradient(90deg, #3D4A6B, #7A8FC4)';

    if (len >= MAX) {
      counter.classList.add('at-limit');
      bar.style.background = 'linear-gradient(90deg, #9B2335, #E05C6E)';
    } else if (pct >= 80) {
      counter.classList.add('near-limit');
      bar.style.background = 'linear-gradient(90deg, #9B5D2D, #E8A56A)';
    }
  });

});
  /* ── Animate progress bars ── */
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.metric-fill').forEach(el => {
      const w = el.dataset.width || 0;
      requestAnimationFrame(() => {
        setTimeout(() => { el.style.width = w + '%'; }, 120);
      });
    });
  });