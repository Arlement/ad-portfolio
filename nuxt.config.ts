// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    app: {
        head: {
            title: "Alem",
            link: [
                { rel: 'icon', type: 'image/png', href: '/profilepicture.png' }
            ]
        }
    },

    modules: [
        "@nuxtjs/tailwindcss",
        '@nuxt/image',
        '@nuxtjs/google-fonts'
    ],

    googleFonts: {
        families: {
            Inter: true,
            Roboto: true,
        }
    }
});

