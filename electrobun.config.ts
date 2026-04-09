import { readFileSync } from "node:fs";
import type { ElectrobunConfig } from "electrobun";

const packageJson = JSON.parse(
	readFileSync(new URL("./package.json", import.meta.url), "utf8"),
) as { version: string };

export default {
	app: {
		name: "Nuxt Desktop",
		identifier: "dev.electrobun.nuxtdesktop",
		version: packageJson.version,
	},
	build: {
		bun: {
			entrypoint: "src/bun/index.ts",
		},
		copy: {
			".output/public": "views/mainview",
		},
		// Nuxt generate writes here before Electrobun copies assets into the app bundle.
		watchIgnore: [".output/**"],
		mac: {
			bundleCEF: false,
		},
		linux: {
			bundleCEF: false,
		},
		win: {
			bundleCEF: false,
		},
	},
} satisfies ElectrobunConfig;
