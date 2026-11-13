/**
 * The single source of truth for the Projects section.
 *
 * To add a project, append an object here. Nothing else needs to change.
 *
 * Fields
 * ------
 * id       Short unique slug. Used as the React key and the tile's DOM id.
 * title    Display name.
 * blurb    One or two sentences. Keep it under ~160 characters so tiles stay even.
 * tags     Two to four short labels (tech, platform, theme).
 * live     Public URL of the running project, or null when there isn't one.
 * code     Public repository URL, or null when the code is private.
 * note     Shown in place of buttons when both `live` and `code` are null.
 * images   One or two teaser images. Paths are relative to /public.
 *            kind: "screen" (default) | "tablet" | "phone"
 *          Two images with kinds "tablet" + "phone" render as a device composite.
 * year     Year the project started or was last substantially worked on.
 *
 * Image guidance: export teasers as WebP (or PNG) at 16:10, roughly 1280x800
 * for "screen"/"tablet" and 480x960 for "phone", and keep each under ~150 KB.
 */

const media = (file) => `${process.env.PUBLIC_URL}/assets/media/${file}`;

const projects = [
  {
    id: 'mtg-tracker',
    title: 'MTG Tracker',
    blurb:
      'Real-time life tracker for Commander. Each player controls their total from a phone while a TV shows the shared board, synced over WebSockets.',
    tags: ['Python', 'WebSockets', 'React', 'Self-hosted'],
    live: null,
    code: 'https://github.com/MitchellHayes/mtg-tracker',
    note: 'Runs on my home network',
    images: [
      { src: media('mtg-tracker-dashboard.webp'), alt: 'MTG Tracker TV dashboard showing four players, commander art and life totals', kind: 'tablet' },
      { src: media('mtg-tracker-phone.webp'), alt: 'MTG Tracker phone controller for a single player', kind: 'phone' },
    ],
    year: 2026,
  },
  {
    id: 'the-outpost',
    title: 'The Outpost',
    // TODO: replace blurb and live URL with the real ones.
    blurb: 'Website for The Outpost, the Minecraft survival server I run, with server info, modpack downloads and season history.',
    tags: ['React', 'Minecraft', 'Community'],
    live: 'https://example.com/the-outpost', // TODO
    code: null,
    note: null,
    images: [{ src: media('the-outpost.webp'), alt: 'Home page of The Outpost website' }],
    year: 2026,
  },
  {
    id: 'no-refunds',
    title: 'No Refunds',
    // TODO: replace blurb and live URL with the real ones.
    blurb: 'A browser game built in TypeScript.',
    tags: ['TypeScript', 'Game'],
    live: 'https://example.com/no-refunds', // TODO
    code: null,
    note: null,
    images: [{ src: media('no-refunds.webp'), alt: 'No Refunds gameplay' }],
    year: 2026,
  },
  {
    id: 'pin-jam',
    title: 'Pin Jam',
    // TODO: replace blurb and live URL with the real ones.
    blurb: 'A pin-pulling puzzle game built in TypeScript.',
    tags: ['TypeScript', 'Puzzle'],
    live: 'https://example.com/pin-jam', // TODO
    code: null,
    note: null,
    images: [{ src: media('pin-jam.webp'), alt: 'Pin Jam puzzle in progress' }],
    year: 2026,
  },
  {
    id: 'ha-dashboards',
    title: 'Home Assistant Dashboards',
    // TODO: tweak blurb.
    blurb: 'Custom Home Assistant dashboards for a wall-mounted tablet and for phones, backed by my own automations and blueprints.',
    tags: ['Home Assistant', 'TypeScript', 'Self-hosted'],
    live: null,
    code: null,
    note: 'Private homelab project',
    images: [
      { src: media('ha-dashboard-tablet.webp'), alt: 'Home Assistant wall tablet dashboard', kind: 'tablet' },
      { src: media('ha-dashboard-phone.webp'), alt: 'Home Assistant mobile dashboard', kind: 'phone' },
    ],
    year: 2026,
  },
  {
    id: 'tree-id',
    title: 'Tree ID',
    blurb:
      'A tree identification key built with my brother, a forestry student, to make dendrology approachable one tap at a time.',
    tags: ['React', 'Education'],
    live: 'https://example.com/tree-id', // TODO
    code: 'https://github.com/MitchellHayes/tree-id',
    note: null,
    images: [{ src: media('tree-id.webp'), alt: 'Tree ID identification key' }],
    year: 2023,
  },
  {
    id: 'coffee-app',
    title: 'Coffee Brew Tracker',
    blurb: 'Log brew style, roast date, dose, brand and blend so the good cups are repeatable.',
    tags: ['React', 'Self-hosted'],
    live: 'https://coffee.hayeshomelab.com',
    code: 'https://github.com/MitchellHayes/coffee-app-react',
    note: null,
    images: [{ src: media('coffeeApp.PNG'), alt: 'Coffee Brew Tracker app' }],
    year: 2023,
  },
];

export default projects;
