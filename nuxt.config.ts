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
                    // Runs before first paint:
                    // 1. Mark JS active so scroll-reveal can hide elements without a
                    //    flash (no-JS users keep content visible).
                    // 2. Apply the saved/OS color theme before paint to avoid a
                    //    flash-of-wrong-theme on this statically-generated site.
                    innerHTML:
                        "document.documentElement.classList.add('reveal-ready');(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()",
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
