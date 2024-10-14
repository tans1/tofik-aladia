import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/storybook",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n"
  ],

  css: ["~/assets/css/main.css", "@fortawesome/fontawesome-free/css/all.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  i18n: {
    vueI18n: "./i18n.config.ts"
  }
});
