# web

Astro + Tailwind v4 landing page scaffolded with the `astro-landing-page` skill.

## Structure

```
src/
├── assets/        # Static assets imported in components
├── components/    # Small, reusable UI primitives
├── consts/        # Static content (nav, site config, copy)
├── layouts/       # Page layouts (Layout.astro)
├── lib/           # Domain logic (fetchers, side-effectful helpers)
├── pages/         # Astro file-based routes
├── sections/      # Page-level sections (Nav, Hero, Footer, ...)
├── styles/        # global.css with @theme tokens
├── types/         # Shared TypeScript types
└── utils/         # Pure helpers (cn, formatters, ...)
```

## Path alias

`@/*` resolves to `src/*` — see `tsconfig.json`.

## Scripts

```bash
pnpm dev      # start dev server
pnpm build    # production build
pnpm preview  # preview built site
pnpm deploy   # build and deploy to Cloudflare Workers
pnpm preview:cloudflare # build and preview with Wrangler
```

The landing is built as a static site for Cloudflare Workers Static Assets. The
deployment configuration lives in `wrangler.jsonc` and serves the generated
`dist/` directory.
