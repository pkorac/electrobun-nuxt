import { BrowserWindow, Updater, Tray, Utils } from "electrobun/bun";

const DEV_SERVER_PORT = 3000;
const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;

// Main window
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
	title: "ElectroNuxt",
	url: await getMainViewUrl(),
	frame: {
		width: 1100,
		height: 760,
		x: 160,
		y: 120,
	},
});

// Tray
// Create a system tray icon
const tray = new Tray({
	image: "views://mainview/tray-icon.png",
});

// Set up the tray context menu
tray.setMenu([
	{ type: "normal", label: "Electrobun Docs", action: "docs" },
	{ type: "normal", label: "Colab", action: "colab" },
	{ type: "normal", label: "Electrobun Github", action: "github" },
	{ type: "divider" },
	{ type: "normal", label: "Quit", action: "quit" },
]);

// Handle menu item clicks
tray.on("tray-clicked", (event: any) => {
	const action = event.data?.action;

	switch (action) {
		case "docs":
			Utils.openExternal("https://electrobun.dev");
			break;
		case "colab":
			Utils.openExternal("https://blackboard.sh/colab/");
			break;
		case "github":
			Utils.openExternal("https://github.com/blackboardsh/electrobun");
			break;
		case "quit":
			tray.remove();
			process.exit(0);
			break;
	}
});

console.log(`Nuxt desktop app started in window ${mainWindow.id}`);
