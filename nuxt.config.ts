// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: false },
	modules: ["@nuxt/ui"],
	css: ["~/assets/main.css"],
	ssr: false,
	router: {
		options: {
			hashMode: true,
		},
	},
});
