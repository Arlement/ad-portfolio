// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    app: {
        head: {
            title: "Alem",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content: "AlemDev, a Content Creator and Developer.",
                },
            ],
            htmlAttrs: {
                lang: 'en'
            },
            link: [
                { rel: "icon", type: "image/png", href: "/profilepicture.png" },
            ],
        },
    },

    modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],

    googleFonts: {
        families: {
            Inter: true,
            Roboto: true,
        },
    },
});
