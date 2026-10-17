import { projects } from './case-studies.js';

const view = document.getElementById('case-study-view');

let lastFocused = null;

function esc(value) {
  const div = document.createElement('div');
  div.textContent = String(value);
  return div.innerHTML;
}

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
        <img src="/portfolio26/upcoming-projects/${file}" alt="Weekend Trip ${label} screen" loading="lazy" />
        <figcaption>${label}</figcaption>
      </figure>`).join('')}</div>`;
  }
  if (project.media.type === 'fidelity') {
    const folder = project.media.folder;
    const doubled = [...project.media.screens, ...project.media.screens];
    return `<div class="case-hero-media pt-marquee" data-pt-marquee aria-label="Final screens — endless scroll">
      <div class="pt-track">
        ${doubled.map((s) => `
          <button class="pt-shot" type="button" data-screen="${esc(s.key)}" aria-label="Show ${esc(s.label)} design process">
            <img src="/portfolio26/${folder}/final/${esc(s.key)}.webp" alt="${esc(project.name)} ${esc(s.label)} screen, final design" loading="lazy" />
            <span>${esc(s.label)}</span>
          </button>`).join('')}
      </div>
    </div>`;
  }
  return `<img class="case-hero-media" src="${project.media.src}" alt="${project.media.alt}" loading="lazy" />`;
}

function renderFidelityCompare(project) {
  const folder = project.media.folder;
  const first = project.media.screens.find((s) => s.key === 'home') || project.media.screens[0];
  return `
    <section class="case-section pt-compare-section">
      <p class="pt-compare-hint">Tap any screen in the scroll above to compare its low-fidelity, medium-fidelity, and final designs side by side.</p>
      <span class="pt-current-screen" id="ptScreenName">Showing: ${esc(first.label)}</span>
      <div class="pt-compare">
        <figure class="pt-fidelity-col">
          <span class="pt-col-label">Low fidelity</span>
          <img id="ptLow" src="/portfolio26/${folder}/lowfi/${esc(first.key)}.webp" alt="${esc(first.label)} low-fidelity wireframe" />
        </figure>
        <figure class="pt-fidelity-col">
          <span class="pt-col-label">Medium fidelity</span>
          <img id="ptMedium" src="/portfolio26/${folder}/medium/${esc(first.key)}.webp" alt="${esc(first.label)} medium-fidelity design" />
        </figure>
        <figure class="pt-fidelity-col">
          <span class="pt-col-label">Final (high fidelity)</span>
          <img id="ptFinal" src="/portfolio26/${folder}/final/${esc(first.key)}.webp" alt="${esc(first.label)} final design" />
        </figure>
      </div>
    </section>`;
}

function bindFidelityCompare(project) {
  const marquee = view.querySelector('[data-pt-marquee]');
  if (!marquee) return;
  const low = view.querySelector('#ptLow');
  const medium = view.querySelector('#ptMedium');
  const final = view.querySelector('#ptFinal');
  const nameEl = view.querySelector('#ptScreenName');
  const compare = view.querySelector('.pt-compare');

  const showScreen = (key) => {
    const screen = project.media.screens.find((s) => s.key === key);
    if (!screen) return;

    low.src = `/portfolio26/${folder}/lowfi/${key}.webp`;
    medium.src = `/portfolio26/${folder}/medium/${key}.webp`;
    final.src = `/portfolio26/${folder}/final/${key}.webp`;
    low.alt = `${screen.label} low-fidelity wireframe`;
    medium.alt = `${screen.label} medium-fidelity design`;
    final.alt = `${screen.label} final design`;
    nameEl.textContent = `Showing: ${screen.label}`;

    compare?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const folder = project.media.folder;
  let pressedShot = null;

  marquee.addEventListener('pointerdown', (event) => {
    pressedShot = event.target.closest('.pt-shot');
  });

  marquee.addEventListener('pointerup', (event) => {
    const releasedShot = event.target.closest('.pt-shot');
    if (pressedShot && releasedShot === pressedShot) showScreen(pressedShot.dataset.screen);
    pressedShot = null;
  });

  marquee.addEventListener('click', (event) => {
    const btn = event.target.closest('.pt-shot');
    if (btn) showScreen(btn.dataset.screen);
  });
}

function renderCaseStudy(project) {
  const cta = project.url
    ? `<a class="case-cta" href="${esc(project.url)}" target="_blank" rel="noopener noreferrer">
        <span>Go to Live Website</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
      </a>`
    : `<span class="case-cta case-cta-disabled" aria-disabled="true">Concept project — no live site yet</span>`;

  const sections = [
    { title: 'Overview', body: esc(project.overview) },
    { title: 'The Problem', body: esc(project.problem) },
  ];
  if (project.media.type === 'fidelity') sections.push({ title: 'From wireframe to final', compare: true });
  sections.push({ title: 'Key Highlights', highlights: true });
  sections.push({ title: 'By the Numbers', stats: true });

  const sectionsHtml = sections.map((section, i) => {
    const number = String(i + 1).padStart(2, '0');
    let content = '';
    if (section.compare) content = renderFidelityCompare(project);
    if (section.highlights) {
      content = `<div class="case-highlights">
        ${project.highlights.map((h, hi) => `
          <article class="case-highlight">
            <span class="case-highlight-index">0${hi + 1}</span>
            <h3>${esc(h.title)}</h3>
            <p>${esc(h.body)}</p>
          </article>`).join('')}
      </div>`;
    }
    if (section.stats) {
      content = `<div class="case-stats">
        ${project.stats.map((s) => `
          <div class="case-stat">
            <span class="case-stat-value">${esc(s.value)}</span>
            <span class="case-stat-label">${esc(s.label)}</span>
          </div>`).join('')}
      </div>`;
    }
    return `
      <section class="case-section">
        <div class="case-section-label"><span class="section-number">${number}</span><h2>${esc(section.title)}</h2></div>
        ${section.body ? `<p class="case-body">${section.body}</p>` : ''}
        ${content}
      </section>`;
  });

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
    ${sectionsHtml.join('')}
    <section class="case-final">
      <p class="case-final-lead">${project.url ? 'Explore the full experience on the live site.' : 'This is a concept design — process work shown above.'}</p>
      ${cta}
    </section>
  `;

  if (project.media.type === 'fidelity') bindFidelityCompare(project);
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
    view.hidden = false;
    document.body.classList.add('case-open');
    document.title = `${project.name} — Girikshit Kumar`;
    window.scrollTo({ top: 0, behavior: 'auto' });
    view.querySelector('.case-crumb')?.focus?.();
  } else {
    document.body.classList.remove('case-open');
    view.hidden = true;
    view.innerHTML = '';
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
