export const projects = {
  gaurdian: {
    slug: 'gaurdian',
    name: 'Gaurdian',
    tagline: 'SOS Mobility System',
    tags: ['Case Study', 'Computer Vision', 'AI Triage'],
    url: 'https://girikshitk.github.io/Gaurdian-Web/',
    media: {
      type: 'fidelity',
      folder: 'pawtracks',
      screens: [
        { key: 'welcome', label: 'Welcome' },
        { key: 'log-in', label: 'Log in' },
        { key: 'home', label: 'Home' },
        { key: 'community', label: 'Community' },
        { key: 'ai-care', label: 'AI care assistant' },
        { key: 'report-animal', label: 'Report an animal' },
        { key: 'donate', label: 'Donate' },
        { key: 'shelter-details', label: 'Shelter details' },
      ],
    },
    overview:
      'Gaurdian is an SOS mobility system that watches a live video stream for distress gestures and dispatches the nearest responder with exact coordinates. The goal was a system that notices what a single human operator would miss — and acts in seconds, not minutes.',
    problem:
      'In dense traffic and public spaces, a raised hand or a wave for help is easy to miss. Existing SOS flows depend on someone spotting the signal, then relaying location by voice. Seconds are lost at every handoff, and the person asking for help has no confirmation anyone saw them.',
    highlights: [
      { image: '/portfolio26/key-highlights/ai-care.png', title: 'AI care assistant', body: 'Describe what\'s wrong and the AI assistant replies with immediate next steps, vet-backed food recommendations, and a clear line on when to call the vet.' },
      { image: '/portfolio26/key-highlights/community.png', title: 'Community', body: 'Every shelter posts spending updates with receipts, so donors see exactly what their contribution funded and the impact it created.' },
      { image: '/portfolio26/key-highlights/report-animal.png', title: 'Report an animal', body: 'A guided report flow: record or upload a video of the animal from a safe distance, and the location is picked up automatically for responders.' },
    ],
    stats: [
      { value: '0.92', label: 'Detection confidence' },
      { value: '12ms', label: 'Geo DB latency' },
      { value: '<10s', label: 'Alert to dispatch' },
    ],
  },
  valueline: {
    slug: 'valueline',
    name: 'Valueline',
    tagline: '3D Experience',
    tags: ['3D / WebGL', 'Interactive'],
    url: 'https://valueline-3d-viewer.netlify.app/',
    media: { type: 'image', src: '/portfolio26/portfolio26/Valueline.png', alt: 'Valueline 3D Experience' },
    overview:
      'Valueline turns a static product catalogue into a 3D experience: viewers orbit, inspect, and play with the product in the browser — no app, no plugin, just WebGL.',
    problem:
      'Product pages flatten physical objects into a few photos. Buyers can’t judge proportions, materials, or fit, so they hesitate or return items. The challenge was to make true 3D inspection feel instant on ordinary hardware.',
    highlights: [
      { title: 'Drag-to-orbit interaction', body: 'Full orbit and tilt control with inertia, tuned so the object feels weighted rather than floating.' },
      { title: 'Performance budget', body: 'Compressed geometry and lazy-loaded textures keep first paint fast, even on mid-range mobile devices.' },
      { title: 'Playful micro-interactions', body: 'Cursor-reactive rotation and hover states reward exploration without getting in the way of the product itself.' },
    ],
    stats: [
      { value: '60fps', label: 'Interaction target' },
      { value: '0', label: 'Plugins required' },
      { value: '3D', label: 'Native inspection' },
    ],
  },
  pixelgame: {
    slug: 'visual-craft',
    name: 'Visual Craft',
    tagline: '2D Pixel Art Game',
    tags: ['Game Design', 'Pixel Art'],
    url: 'https://www.behance.net/gallery/228367639/My-First-Game-Design-Project',
    media: { type: 'image', src: '/portfolio26/portfolio26/2dgame.png', alt: 'Visual Craft 2D Pixel Art Game' },
    overview:
      'Visual Craft is a 2D pixel art game design project exploring tight sprite work, readable animation, and game feel — my first full game design project, documented end to end.',
    problem:
      'Pixel art punishes imprecision: a character that reads clearly at 32px requires deliberate silhouette, palette, and frame timing. The project set out to learn those constraints by designing a complete, playable character loop.',
    highlights: [
      { title: 'Sprite animation cycles', body: 'Run, idle, and jump cycles built on 4–8 frame timing, tested in-engine until motion read cleanly at game speed.' },
      { title: 'Readable silhouettes', body: 'Character and prop designs iterate on outline-first sketches so every element stays identifiable at small scale.' },
      { title: 'Full design documentation', body: 'The complete process — research, spritesheets, animation tests, and level mockups — is documented in the published case study.' },
    ],
    stats: [
      { value: '4–8', label: 'Frames per cycle' },
      { value: '32px', label: 'Sprite canvas' },
      { value: '100%', label: 'Process documented' },
    ],
  },
  redthumb: {
    slug: 'redthumb3d',
    name: 'RedThumb3D',
    tagline: 'Pokémon 3D Figurine Catalogue',
    tags: ['3D / E-commerce'],
    url: 'https://girikshitk.github.io/RedThumb3D/',
    media: { type: 'image', src: '/portfolio26/portfolio26/red_thumb_landscape_16x9_(1).png', alt: 'RedThumb3D Pokémon Figurine Catalogue' },
    overview:
      'RedThumb3D is a storefront concept for 3D-printable Pokémon figurines: browse a catalogue, preview each model in 3D, and queue a print — all in one flow.',
    problem:
      'Model catalogues usually show a thumbnail and a filename. Buyers can’t tell print quality, scale, or detail from a static image, so they download blind. The project set out to make the preview itself the sales pitch.',
    highlights: [
      { title: 'In-browser model preview', body: 'Every figurine loads in an interactive viewer with orbit controls, letting collectors inspect detail before committing.' },
      { title: 'Print-ready presentation', body: 'Catalogue cards surface scale, material notes, and print orientation alongside the preview, mimicking a real print queue.' },
      { title: 'Catalogue-first UX', body: 'A single-page catalogue keeps browsing friction low: search, preview, and queue happen without leaving the page.' },
    ],
    stats: [
      { value: '3D', label: 'Every listing' },
      { value: '1', label: 'Page, zero reloads' },
      { value: '0', label: 'Downloads needed to preview' },
    ],
  },
  aura: {
    slug: 'aura',
    name: 'AURA',
    tagline: '3D Earbud Exploded Acoustics',
    tags: ['3D / Product'],
    url: 'https://girikshitk.github.io/AURA-Earbud/',
    media: { type: 'image', src: '/portfolio26/portfolio26/aura_earbud.png', alt: 'AURA 3D Earbud Exploded Acoustics' },
    overview:
      'AURA is an exploded-view 3D experience of an earbud: layers of drivers, acoustic chambers, and shell separate in space to show how sound is actually built.',
    problem:
      'Audio hardware marketing hides the parts that matter. Exploded diagrams in spec sheets are static and unreadable, so the engineering story never reaches the buyer. AURA makes that story interactive.',
    highlights: [
      { title: 'Exploded-view choreography', body: 'Components separate and reassemble on scroll and input, with easing tuned so each layer lands with intent.' },
      { title: 'Acoustic wave visuals', body: 'Pulsing rings and sound-reactive elements echo the product’s purpose directly in the scene around it.' },
      { title: 'Label-on-demand detail', body: 'Part names and specs appear contextually, keeping the view clean until the viewer asks for depth.' },
    ],
    stats: [
      { value: '7+', label: 'Exploded layers' },
      { value: '100%', label: 'Browser-based' },
      { value: '0', label: 'Static diagrams' },
    ],
  },
  tripPlanner: {
    slug: 'weekend-trip',
    name: 'Weekend Trip',
    tagline: 'AI trip planning, bookings & shared expenses',
    tags: ['Product Design', 'AI / Travel'],
    url: null,
    media: { type: 'gallery' },
    overview:
      'Weekend Trip is a shared workspace for planning a trip with friends: one place for AI-drafted itineraries, bookings, and settling shared expenses — designed so nobody has to be the group accountant.',
    problem:
      'Group trips fragment across chat threads, spreadsheets, and five payment apps. Plans live in one place, money in another, and the person who booked everything is left chasing everyone else. The concept unifies planning and settlement in a single shared space.',
    highlights: [
      { title: 'AI itinerary drafts', body: 'Upload preferences and get a day-by-day draft itinerary that the whole group can edit in real time.' },
      { title: 'Shared expenses ledger', body: 'Every cost is logged against the trip, with automatic settlement suggestions that minimize the number of transfers.' },
      { title: 'Ten-screen product flow', body: 'From upload to settlement, the full journey was designed across ten cohesive screens, shown in the gallery above.' },
    ],
    stats: [
      { value: '10', label: 'Designed screens' },
      { value: '1', label: 'Shared workspace' },
      { value: '0', label: 'Chasing payments' },
    ],
  },
};
