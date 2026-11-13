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
    blurb:
      'Home of The Outpost, a homestead-style Minecraft SMP I run. Live player count, Discord status, gallery, news, rules and a Bluemap of the world.',
    tags: ['React', 'Minecraft', 'Community'],
    live: 'https://theoutpostsmp.com/',
    code: null,
    note: null,
    images: [{ src: media('the-outpost.webp'), alt: 'The Outpost home page with a screenshot of a Minecraft build and a Join button' }],
    year: 2026,
  },
  {
    id: 'no-refunds',
    title: 'No Refunds',
    blurb:
      'A pixel-art shopkeeping roguelike. Run an adventuring-supplies store, pay off the lich in 30 days, and unlock new backgrounds with each run.',
    tags: ['TypeScript', 'Roguelike'],
    live: 'https://norefunds.hayeshomelab.com/',
    code: null,
    note: null,
    images: [{ src: media('no-refunds.webp'), alt: 'No Refunds title screen with the shop sign and character selection' }],
    year: 2026,
  },
  {
    id: 'pin-jam',
    title: 'Pin Jam',
    blurb: 'Unscrew the pins, sort the colours, watch the swing. A mobile-first puzzle game with a growing set of levels.',
    tags: ['TypeScript', 'Puzzle', 'Mobile'],
    live: 'https://pinjam.hayeshomelab.com/',
    code: null,
    note: null,
    // Mobile-first, so the teaser is a single phone screenshot (about 480x960).
    images: [{ src: media('pin-jam-phone.webp'), alt: 'Pin Jam Puzzle start screen with the level grid on a phone', kind: 'phone' }],
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
    live: 'https://treeid.hayeshomelab.com/',
    code: 'https://github.com/MitchellHayes/tree-id',
    note: null,
    images: [{ src: media('tree-id.webp'), alt: 'Tree ID list of identifiable trees with photos and Latin names' }],
    year: 2023,
  },
  {
    id: 'coffee-app',
    title: 'Coffee Brew Tracker',
    blurb: 'Log brew style, roast date, dose, brand and blend so the good cups are repeatable.',
    tags: ['React'],
    live: 'https://coffee.hayeshomelab.com',
    code: 'https://github.com/MitchellHayes/coffee-app-react',
    note: null,
    images: [{ src: media('coffeeApp.PNG'), alt: 'Coffee Brew Tracker app' }],
    year: 2023,
  },
];

export default projects;
