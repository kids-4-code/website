// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/tailwind.css", "~/assets/css/fonts.css"],
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/content"],
	content: {
		documentDriven: true,
	},
	app: {
		head: {
			titleTemplate: "%s - Kids for Code",
		},
	},
});
