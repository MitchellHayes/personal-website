# mitchellhayes personal website

Single-page portfolio built with React (Create React App).

## Adding or updating a project

All projects live in [`src/data/projects.js`](src/data/projects.js). The Projects
section renders straight from that array, so adding a project is:

1. Drop a teaser image into `public/assets/media/` (16:10, roughly 1280x800,
   WebP or PNG, ideally under 150 KB). For a two-screen project add a second
   phone-shaped image (about 480x960).
2. Append an object to the array with `title`, `blurb`, `tags`, `live`, `code`
   and `images`. Set `live` or `code` to `null` when there is no public link;
   the tile then shows `note` instead of buttons.
3. Commit.

The field reference is in the comment at the top of that file.

## Scripts

```bash
npm ci          # install
npm start       # dev server on http://localhost:3000
npm test        # run the test suite once with CI=true, or in watch mode without it
npm run build   # production build to ./build
npm run preview # build, then serve ./build through Wrangler on http://localhost:8787
npm run deploy  # build, then deploy ./build to Cloudflare Workers
```

## Deploying to Cloudflare Workers

The site is deployed as a Workers static-assets project. `wrangler.jsonc` points
Wrangler at the `build` folder; there is no custom Worker code.

One-time setup on your machine:

```bash
npx wrangler login
```

Then, whenever you want to publish:

```bash
npm run deploy
```

The first deploy creates a Worker called `personal-website` and prints its
`*.workers.dev` URL. To serve it on your own domain, add a custom domain to the
Worker in the Cloudflare dashboard (Workers & Pages, the Worker, Settings,
Domains & Routes), or add a `routes` entry to `wrangler.jsonc`.
