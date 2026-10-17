import { projects } from './case-studies.js';

const view = document.getElementById('case-study-view');

let lastFocused = null;

function renderMedia(project) {
  if (project.media.type === 'video') {
    return `<video class="case-hero-media" src="${project.media.src}" alt="${project.name} preview" autoplay muted loop playsinline></video>`;
  }
  if (project.media.type === 'gallery') {
    const shots = [
      ['Build_App_from_Data_(2).png', 'Upload itinerary'],
      ['Build_App_from_Data_(1).png', 'Itinerary board'],
      ['Build_App_from_2Data.png', 'Settlements'],
      ['Build_App_from_Data-1.png', 'Profile'],
      ['Build_App_from_Data.png', 'Trip overview'],
      ['Build_App_from_Data_(5).png', 'Expenses'],
      ['Build_App_from_Data_(6).png', 'Sharing'],
      ['Build_App_from_Data_(7).png', 'Wrap-up'],
    ];
    return `<div class="case-hero-media case-gallery">${shots.map(([file, label]) => `
      <figure class="case-gallery-item">
        <img src="/upcoming-projects/${file}" alt="Weekend Trip ${label} screen" loading="lazy" />
        <figcaption>${label}</figcaption>
      </figure>`).join('')}</div>`;
  }
  return `<img class="case-hero-media" src="${project.media.src}" alt="${project.media.alt}" loading="lazy" />`;
}

function esc(value) {
  const div = document.createElement('div');
  div.textContent = String(value);
  return div.innerHTML;
}

function renderCaseStudy(project) {
  const cta = project.url
    ? `<a class="case-cta" href="${esc(project.url)}" target="_blank" rel="noopener noreferrer">
        <span>Go to Live Website</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
      </a>`
    : `<span class="case-cta case-cta-disabled" aria-disabled="true">Concept project — no live site yet</span>`;

  view.innerHTML = `
    <section class="case-hero">
      <nav class="case-breadcrumbs" aria-label="Breadcrumb">
        <a href="#/" class="case-crumb">Projects</a>
        <span class="case-crumb-sep" aria-hidden="true">/</span>
        <span class="case-crumb current" aria-current="page">${esc(project.name)}</span>
      </nav>
      <div class="case-hero-content">
        <h1>${esc(project.name)}</h1>
        <p class="case-tagline">${esc(project.tagline)}</p>
        <div class="case-tags">${project.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>
      <div class="case-hero-visual">${renderMedia(project)}</div>
    </section>

    <section class="case-section">
      <div class="case-section-label"><span class="section-number">01</span><h2>Overview</h2></div>
      <p class="case-body">${esc(project.overview)}</p>
    </section>

    <section class="case-section">
      <div class="case-section-label"><span class="section-number">02</span><h2>The Problem</h2></div>
      <p class="case-body">${esc(project.problem)}</p>
    </section>

    <section class="case-section">
      <div class="case-section-label"><span class="section-number">03</span><h2>Key Highlights</h2></div>
      <div class="case-highlights">
        ${project.highlights.map((h, i) => `
          <article class="case-highlight">
            <span class="case-highlight-index">0${i + 1}</span>
            <h3>${esc(h.title)}</h3>
            <p>${esc(h.body)}</p>
          </article>`).join('')}
      </div>
    </section>

    <section class="case-section">
      <div class="case-section-label"><span class="section-number">04</span><h2>By the Numbers</h2></div>
      <div class="case-stats">
        ${project.stats.map((s) => `
          <div class="case-stat">
            <span class="case-stat-value">${esc(s.value)}</span>
            <span class="case-stat-label">${esc(s.label)}</span>
          </div>`).join('')}
      </div>
    </section>

    <section class="case-final">
      <p class="case-final-lead">Explore the full experience on the live site.</p>
      ${cta}
    </section>
  `;
}

function slugForCard(card) {
  const btn = card.querySelector('.like-btn[data-project]');
  const key = btn ? btn.dataset.project : null;
  const fallback = card.id.replace(/^card-/, '');
  const project = (key && projects[key]) || projects[fallback];
  return project ? project.slug : null;
}

function navigateFromHash() {
  const slug = decodeURIComponent(location.hash.replace(/^#\/?/, '')).replace(/^\//, '');
  const project = Object.values(projects).find((p) => p.slug === slug);

  if (project) {
    if (!document.body.classList.contains('case-open')) lastFocused = document.activeElement;
    renderCaseStudy(project);
    document.body.classList.add('case-open');
    document.title = `${project.name} — Girikshit Kumar`;
    window.scrollTo({ top: 0, behavior: 'auto' });
    view.querySelector('.case-crumb')?.focus?.();
  } else {
    document.body.classList.remove('case-open');
    document.title = 'Girikshit Kumar - Product Designer & AI Engineer';
    if (lastFocused && document.body.contains(lastFocused)) lastFocused.focus?.();
    if (slug) history.replaceState(null, '', '#/');
  }
}

export function initCaseStudyRouting() {
  window.addEventListener('hashchange', navigateFromHash);
  navigateFromHash();

  document.querySelectorAll('.project[data-url], .project[data-slug]').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.like-btn') || e.target.closest('.view-link') || e.target.closest('.trip-gallery-item')) return;
      const slug = card.dataset.slug || slugForCard(card);
      if (!slug) return;
      e.preventDefault();
      location.hash = `#/${slug}`;
    });
  });
}
