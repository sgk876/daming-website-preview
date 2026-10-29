/* Visual chrome only. Inquiry delivery stays in app.js. */
(function () {
  if (!document.querySelector('.preview-bar')) {
    const bar = document.createElement('div');
    bar.className = 'preview-bar';
    bar.innerHTML = 'DaMing Touch &amp; Display <span>Live inquiry submission · Project details subject to review</span>';
    document.body.prepend(bar);
  }
  if (document.querySelector('#wizard') && !document.querySelector('.sticky-inquiry')) {
    const bar = document.createElement('div');
    bar.className = 'sticky-inquiry';
    bar.innerHTML = '<button type="button" class="button" data-start="guided">Tell us what you are building</button>';
    document.body.appendChild(bar);
  }
  document.addEventListener('click', (event) => {
    const start = event.target.closest('[data-start]');
    if (!start || start.hasAttribute('data-catalog-ref')) return;
    try { sessionStorage.removeItem('damingCatalogRef'); } catch (err) { /* private mode */ }
  });
})();
