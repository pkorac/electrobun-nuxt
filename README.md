# Nuxt Basic Starter

by Peter Koraca

A minimal [Nuxt 4](https://nuxt.com) starter app with [Nuxt UI v4](https://ui.nuxt.com), [Tailwind CSS v4](https://tailwindcss.com), and TypeScript.

## Setup

Install dependencies:

```bash
bun install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

Run the desktop shell against a generated static build:

```bash
bun run dev:desktop
```

Run the desktop shell with Nuxt HMR:

```bash
bun run dev:desktop:hmr
```

This uses the same pattern as the ElectroBun Vue example:

- in development, the desktop window loads `http://localhost:3000` when the Nuxt dev server is available
- otherwise it falls back to the generated static files copied into ElectroBun's `views://mainview`

## Production

Build the application for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

Generate a static site:

```bash
bun run generate
```

Build the desktop application bundle:

```bash
bun run build:desktop
```

## Learn More

- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Deployment Guide](https://nuxt.com/docs/getting-started/deployment)
