# Electrobun + Nuxt Basic Example

by Peter Koraca

A minimal desktop application built with [Electrobun](https://electrobun.dev), [Nuxt 4](https://nuxt.com), [Nuxt UI v4](https://ui.nuxt.com), [Tailwind CSS v4](https://tailwindcss.com), and TypeScript.

## Prerequisites

- [Bun](https://bun.sh) (latest)
- macOS, Linux, or Windows (see [Electrobun platform support](https://electrobun.dev))

---

## Setup

Install dependencies:

```bash
bun install
```

This also runs `nuxt prepare` automatically via the `postinstall` hook.

---

## Development

### Web only

Start the Nuxt development server on `http://localhost:3000`:

```bash
bun run dev
```

### Desktop (static build)

Generate a static site and launch the Electrobun desktop shell with file watching:

```bash
bun run dev:desktop
```

This runs `nuxt generate` first, then opens the app via `electrobun dev --watch`. The desktop window loads the static files from `views://mainview/index.html`.

### Desktop HMR (Hot Module Reload)

Run the Nuxt dev server and the Electrobun desktop shell side-by-side for live reloading:

```bash
bun run dev:desktop:hmr
```

This uses `concurrently` to start both `bun run dev` and `bun run dev:desktop` in parallel. In dev mode the Electrobun process detects the running Nuxt server and loads `http://localhost:3000` instead of the static files, giving you full hot-module replacement in the desktop window.

---

## Production

### Build (dynamic – web)

Build the Nuxt application for hosting on a server/serverless. If you turn ssr on, you get server side rendering.

```bash
bun run build
```

### Generate (static - web)

Generate a fully static site to `.output/public`:

```bash
bun run generate
```

### Build Electrobun desktop application

Generate the static site and package it into an Electrobun application bundle:

```bash
bun run build:desktop
```

This runs `nuxt generate` followed by `electrobun build --env=stable`. The Electrobun config copies `.output/public` into the `views/mainview` directory inside the app bundle.

---

## Project Structure

```
├── app/                    # Nuxt application source
│   ├── assets/             #   CSS and static assets
│   ├── pages/              #   File-based routing pages
│   ├── app.vue             #   Root Vue component
│   └── app.config.ts       #   Nuxt UI / app-level config
├── src/
│   └── bun/
│       └── index.ts        # Electrobun main process entry point
├── public/                 # Nuxt public assets (served as-is)
├── electrobun.config.ts    # Electrobun build & app configuration
├── nuxt.config.ts          # Nuxt configuration
├── package.json
└── tsconfig.json
```

---

## How It Works

The Electrobun main process (`src/bun/index.ts`) creates a `BrowserWindow` and decides which URL to load:

- **Dev channel** — if a Nuxt dev server is running on port 3000 it loads `http://localhost:3000` for HMR; otherwise it falls back to the static files.
- **Stable / production** — it always loads `views://mainview/index.html`, which points to the generated static site bundled inside the app.

Nuxt runs in hash-history mode in this project so the desktop shell can load `views://mainview/index.html` without the SPA router interpreting `/index.html` as an application route.

The `electrobun.config.ts` maps `.output/public` → `views/mainview` so that Nuxt's generated output is automatically included in the desktop build.

## Scripts Reference

| Script                    | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| `bun run dev`             | Start Nuxt dev server at `localhost:3000`            |
| `bun run dev:desktop`     | Generate static site + launch Electrobun in dev mode |
| `bun run dev:desktop:hmr` | Run Nuxt dev server + Electrobun together (HMR)      |
| `bun run build`           | Build Nuxt for SSR production                        |
| `bun run preview`         | Preview the SSR production build                     |
| `bun run generate`        | Generate a static site to `.output/public`           |
| `bun run build:desktop`   | Generate static site + build Electrobun app bundle   |

## Learn More

- [Electrobun Documentation](https://electrobun.dev)
- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bun Documentation](https://bun.sh/docs)

Have fun,
Peter Koraca
