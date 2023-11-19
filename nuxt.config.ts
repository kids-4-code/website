// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/tailwind.css", "~/assets/css/fonts.css"],
	modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/content", "nuxt-gtag"],
	content: {
		documentDriven: true,
	},
	app: {
		head: {
			titleTemplate: "%s - Kids for Code",
		},
	},
	gtag: {
		id: "G-GJ6MQFJZ1V",
	},
});
