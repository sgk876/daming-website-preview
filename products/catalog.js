'use strict';
(function () {
  const data = window.DAMING_CATALOG;
  if (!data) return;
  const R = '/daming-website-preview';

  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const byId = (id) => data.products.find((item) => item.id === id);

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-catalog-ref]');
    if (!button) return;
    try { sessionStorage.setItem('damingCatalogRef', button.getAttribute('data-catalog-ref') || ''); } catch (err) { /* private mode */ }
  }, true);

  function metricStrip(product) {
    const cells = (product.metrics || []).slice(0, 3).map((metric) => (
      `<div role="listitem"><b>${esc(metric.value)}</b><span>${esc(metric.label)}</span></div>`
    )).join('');
    return `<div class="metric-strip" role="list">${cells}</div>`;
  }

  function tile(product) {
    const href = `${R}/products/detail.html?id=${encodeURIComponent(product.id)}`;
    const pending = product.status === 'pending' ? '<em>Pending confirmation</em>' : '<em>Reference design</em>';
    return `<a class="range-tile" href="${href}">
      <span class="range-photo"><img src="${esc(product.image)}" alt="${esc(product.imageAlt)}" loading="lazy"></span>
      <span class="range-name">${esc(product.title)}</span>
      ${pending}
      <span class="range-cta">Inquire</span>
    </a>`;
  }

  function renderSpotlights(root) {
    const featured = data.products.filter((item) => item.featured);
    root.innerHTML = featured.map((product, index) => {
      const href = `${R}/products/detail.html?id=${encodeURIComponent(product.id)}`;
      const flip = index % 2 ? ' spotlight-flip' : '';
      return `<article class="spotlight${flip}">
        <div class="spotlight-copy">
          <p class="eyebrow">${esc(product.kicker)}</p>
          <h2>${esc(product.title)}</h2>
          <p>${esc(product.summary)}</p>
          <a class="text-link" href="${href}">Read the reference <span>→</span></a>
        </div>
        <figure class="spotlight-figure">
          <img src="${esc(product.image)}" alt="${esc(product.imageAlt)}">
          <figcaption>${esc(product.sizeLabel)} · photograph from the previous product page</figcaption>
        </figure>
        ${metricStrip(product)}
      </article>`;
    }).join('');
  }

  function renderRange(root) {
    const category = root.getAttribute('data-category') || 'pcap';
    const items = data.products.filter((item) => item.category === category && item.kind !== 'family');
    root.innerHTML = items.map(tile).join('');
  }

  function renderCatalog(root) {
    const tabs = root.querySelector('[data-catalog-tabs]');
    const grid = root.querySelector('[data-catalog-grid]');
    const lede = root.querySelector('[data-catalog-lede]');
    if (!tabs || !grid) return;
    const initial = new URLSearchParams(location.search).get('category')
      || (location.hash || '').replace('#', '')
      || data.categories[0].id;

    const paint = (categoryId) => {
      const category = data.categories.find((item) => item.id === categoryId) || data.categories[0];
      tabs.querySelectorAll('button').forEach((button) => {
        const on = button.getAttribute('data-category') === category.id;
        button.setAttribute('aria-pressed', String(on));
      });
      if (lede) lede.textContent = category.lede;
      const items = data.products.filter((item) => item.category === category.id);
      grid.innerHTML = items.map(tile).join('') || '<p class="catalog-empty">No modules in this family yet.</p>';
      const url = new URL(location.href);
      url.searchParams.set('category', category.id);
      history.replaceState(null, '', url.pathname + url.search);
    };

    tabs.innerHTML = data.categories.map((category) => (
      `<button type="button" data-category="${esc(category.id)}" aria-pressed="false">${esc(category.label)}</button>`
    )).join('');
    tabs.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-category]');
      if (button) paint(button.getAttribute('data-category'));
    });
    paint(initial);
  }

  function renderDetail(root) {
    const id = new URLSearchParams(location.search).get('id');
    const product = byId(id);
    if (!product) {
      root.innerHTML = `<div class="wrap section"><p class="eyebrow">Catalog</p><h1>That module is not in the library.</h1><p>The id is missing or has not been added to the catalog data.</p><a class="button" href="${R}/products/catalog.html">Back to the catalog</a></div>`;
      document.title = 'Module not found | DaMing';
      return;
    }
    document.title = `${product.title} | DaMing Touch&Display`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', product.summary);
    const specs = (product.specs || []).map((row) => (
      `<tr><th scope="row">${esc(row.name)}</th><td>${esc(row.value)}${row.pending ? ' <span class="pending-tag">Pending confirmation</span>' : ''}</td></tr>`
    )).join('');
    const resources = (product.resources || []).map((link) => (
      `<a href="${esc(link.href)}">${esc(link.label)} <span>→</span></a>`
    )).join('');
    const related = (product.related || []).map(byId).filter(Boolean).map(tile).join('');
    const selected = product.category === 'lcd' ? 'assembly' : 'pcap';
    root.innerHTML = `<article>
      <header class="module-hero"><div class="wrap">
        <p class="breadcrumbs"><a href="${R}/">Home</a><span>/</span><a href="${R}/products/catalog.html">Catalog</a><span>/</span><span>${esc(product.title)}</span></p>
        <div class="module-grid">
          <figure class="module-photo"><img src="${esc(product.image)}" alt="${esc(product.imageAlt)}"></figure>
          <div>
            <p class="eyebrow">${esc(product.kicker)}</p>
            <h1>${esc(product.title)}</h1>
            <p class="intro">${esc(product.summary)}</p>
            <p class="status-line">${product.status === 'pending' ? 'Pending confirmation — not a released drawing.' : 'Reference design — confirm the drawing before production.'}</p>
            <div class="actions">
              <button class="button" type="button" data-start="guided" data-selected="${selected}" data-catalog-ref="${esc(product.title)}">Configure this module</button>
              <button class="button secondary" type="button" data-start="specs" data-selected="${selected}" data-catalog-ref="${esc(product.title)}">I have a drawing</button>
            </div>
            ${metricStrip(product)}
          </div>
        </div>
      </div></header>
      <section class="wrap module-story">
        ${product.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}
      </section>
      <section class="wrap module-specs">
        <h2>Specification</h2>
        <p class="section-intro">No public price. Interface, cover and acceptance limits are confirmed on the project.</p>
        <div class="spec-table"><table><tbody>${specs}</tbody></table></div>
        <p class="source-line">Previous page: <a href="${esc(product.source)}">${esc(product.source)}</a></p>
      </section>
      <section class="wrap module-resources">
        <h2>Related resources</h2>
        <div class="resource-links">${resources}</div>
      </section>
      <section class="range-section">
        <div class="wrap">
          <h2>Continue through the library</h2>
          <div class="range-grid">${related}</div>
        </div>
      </section>
      <section class="inquiry"><div class="wrap inquiry-panel">
        <div>
          <p class="eyebrow">Project inquiry</p>
          <h2>Tell us what you are building.</h2>
          <p>Share the equipment, the mechanical window and what you already know. We reply with the open decisions, not a shopping-cart price.</p>
        </div>
        <div class="inquiry-actions">
          <button class="button" type="button" data-start="guided" data-selected="${selected}" data-catalog-ref="${esc(product.title)}">Inquire about this module</button>
          <a class="text-link" href="${R}/contact.html">Contact Chloe or Si Guokun <span>→</span></a>
        </div>
      </div></section>
    </article>`;
  }

  function initPath(root) {
    const buttons = [...root.querySelectorAll('[data-stage]')];
    const panels = [...root.querySelectorAll('[data-stage-panel]')];
    const select = (id) => {
      buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.getAttribute('data-stage') === id)));
      panels.forEach((panel) => panel.hidden = panel.getAttribute('data-stage-panel') !== id);
    };
    buttons.forEach((button) => button.addEventListener('click', () => select(button.getAttribute('data-stage'))));
    select('01');
  }

  const spotlights = document.querySelector('[data-spotlights]');
  if (spotlights) renderSpotlights(spotlights);
  const range = document.querySelector('[data-range]');
  if (range) renderRange(range);
  const catalog = document.querySelector('[data-catalog]');
  if (catalog) renderCatalog(catalog);
  const detail = document.querySelector('[data-detail]');
  if (detail) renderDetail(detail);
  const path = document.querySelector('[data-path]');
  if (path) initPath(path);
})();
