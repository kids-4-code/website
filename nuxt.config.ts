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
            titleTemplate: "%s – Kids for Code",
            script: [
                {
                    // Mark JS as active before first paint so scroll-reveal can
                    // hide elements without a flash; no-JS users keep content visible.
                    innerHTML:
                        "document.documentElement.classList.add('reveal-ready')",
                    tagPosition: "head",
                },
            ],
        },
    },
    gtag: {
        id: "G-GJ6MQFJZ1V",
    },
    nitro: {
        prerender: {
            failOnError: false,
        }
    },
});
