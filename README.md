# Ignite API docs

Public Ignite API documentation built with [Fumadocs](https://www.fumadocs.dev) and the Next.js App Router.

## Local development

Use Node.js 22.13 or newer and npm:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Existing guide URLs such as `/quickstart` and `/changelog` are preserved. The API reference starts at `/api-reference`.

## Project structure

- `content/docs/`: MDX guides and `meta.json` sidebar ordering.
- `app/`: documentation layouts, page rendering, and the search route.
- `mdx-components.tsx`: Fumadocs components and the changelog `Update` component.
- `public/`: favicon and light/dark logos.
- `source.config.ts`: Fumadocs MDX collection configuration.
- `openapi.json`: the existing API schema, used to generate the reference.
- `scripts/generate-api.ts`: generates endpoint pages under `content/docs/api-reference/generated/`.

API pages and `.source/` are generated locally and ignored by Git. Installation, development, builds, and type checking regenerate the API reference automatically. After editing the schema while the dev server is running, run `npm run generate:api`.

## Editing

Keep docs concise, use active voice, and format file names, commands, paths, and API fields with code formatting. Register MDX components in `mdx-components.tsx` and order pages in `content/docs/meta.json`.

Do not change endpoint contracts in `openapi.json` unless the API source of truth has already changed. Metadata-only cleanup is fine.

Changelog entries retain the `<Update label="..." tags={["..."]}>` format. Release-note tooling must read and write `content/docs/changelog.mdx`, including its Git staging path.

## Validation

```sh
npm run typecheck
npm run build
git diff --check
```

The build compiles all guides and generates a reference page for each OpenAPI operation.

## Deployment

Deploy as a standard Next.js application using Node.js 22.13 or newer:

- Install: `npm ci`
- Build: `npm run build`
- Start: `npm start` (uses `PORT` when set)

Run from the repository root. Choose a Next.js-compatible host and configure its deployment separately; this repository does not configure a hosting provider. Search uses the `/api/search` server route, so this setup requires a Next.js server rather than a static file host.
