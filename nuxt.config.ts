// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
export default defineNuxtConfig({
    css: ['~/assets/styles/_custom.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/_colors.scss";',
                },
            },
        }
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    build: {
        transpile: ["@heroicons/vue", "@headlessui/vue"],
    }
})
