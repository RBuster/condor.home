// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/_custom.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_colors.scss";'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', {
      autoImports: [
        'defineStore'
      ]
    }]

  ],
  build: {
    transpile: ['@heroicons/vue', '@headlessui/vue']
  }
})
