# Electrobun in Nuxt

Minimal notes for adding **Electrobun** to a Nuxt repo like this one.

## Install

```bash
bun add electrobun
bun add -d @types/bun concurrently
```

Add scripts to `package.json`:

```json
{
	"scripts": {
		"build:desktop": "bun run generate && electrobun build --env=stable",
		"dev:desktop": "bun run generate && electrobun dev --watch",
		"dev:desktop:hmr": "concurrently \"bun run dev\" \"bun run dev:desktop\"",
		"generate": "nuxt generate"
	}
}
```

## Nuxt Changes vs Normal

In `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
	ssr: false,
	router: {
		options: {
			hashMode: true,
		},
	},
});
```

- `ssr: false` – desktop app is shipped as a client-side SPA.
- `hashMode: true` – important for `views://mainview/index.html`; avoids route resolution issues inside the bundled desktop shell.

## Electrobun Setup

Create `electrobun.config.ts`:

```ts
export default {
	build: {
		bun: {
			entrypoint: "src/bun/index.ts",
		},
		copy: {
			".output/public": "views/mainview",
		},
		watchIgnore: [".output/**"],
	},
};
```

Create `src/bun/index.ts` and open either:

- `http://localhost:3000` when the Nuxt dev server is running
- `views://mainview/index.html` otherwise

That gives you a nice split between desktop HMR in dev and bundled static files in production.

## Electrobun Preferences Here

- Use `nuxt generate` for desktop builds – not `nuxt build`.
- Copy `.output/public` into `views/mainview` in the app bundle.
- Keep a dedicated Bun entrypoint in `src/bun/index.ts`.
- `bundleCEF: false` is enabled for macOS/Linux/Windows in this repo to keep builds leaner.

## Run

```bash
bun run dev:desktop:hmr
```

For a packaged desktop build:

```bash
bun run build:desktop
```
