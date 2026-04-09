import { BrowserWindow, Updater } from "electrobun/bun";

const DEV_SERVER_PORT = 3000;
const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;

async function getMainViewUrl(): Promise<string> {
	const channel = await Updater.localInfo.channel();
	if (channel === "dev") {
		try {
			await fetch(DEV_SERVER_URL, { method: "HEAD" });
			console.log(`HMR enabled: using Nuxt dev server at ${DEV_SERVER_URL}`);
			return DEV_SERVER_URL;
		} catch {
			console.log(
				"Nuxt dev server not running. Run 'bun run dev:desktop:hmr' for live frontend reloads.",
			);
		}
	}

	return "views://mainview/index.html";
}

const mainWindow = new BrowserWindow({
	title: "Nuxt Desktop",
	url: await getMainViewUrl(),
	frame: {
		width: 1100,
		height: 760,
		x: 160,
		y: 120,
	},
});

console.log(`Nuxt desktop app started in window ${mainWindow.id}`);
