# Documentation project instructions

## About this project

- This is the public Ignite API documentation site, built with Fumadocs and Next.js.
- Author guides as MDX files with YAML frontmatter under `content/docs/`.
- Configure navigation in `content/docs/meta.json` and nested `meta.json` files.
- Configure MDX collections in `source.config.ts` and components in `mdx-components.tsx`.
- Keep static assets under `public/`.
- Generate API reference pages from `openapi.json` using `npm run generate:api`. Do not edit generated pages or `.source/`.

## Style preferences

- Use active voice and second person ("you").
- Keep sentences concise, with one idea per sentence.
- Use sentence case for headings.
- Bold UI elements: Click **Settings**.
- Use code formatting for file names, commands, paths, and code references.
- Use customer-facing terminology and avoid internal database details.

## Content boundaries

- Document public integration workflows and API behavior.
- Do not change API contracts in `openapi.json` unless the API source of truth has already changed.
- Preserve existing guide URLs when reorganizing content.
- Keep changelog entries compatible with the `Update` component.

## Validation

- Run `npm run typecheck`, `npm run build`, and `git diff --check` before handing off changes.
- Verify navigation, search, light/dark themes, and interactive components when changing the app.
- Do not commit or push unless the user requests it.
