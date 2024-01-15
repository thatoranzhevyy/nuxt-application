// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n"
  ],

  i18n: {

    strategy: "no_prefix",
    defaultLocale: "ru",
    langDir: "locales",
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "ru",
      redirectOn: "root"
    },
    locales: [
      {
        code: "ru",
        iso: "ru-RU",
        name: "Русский",
        file: "ru.json"
      },
      {
        code: "kz",
        iso: "kz-KZ",
        name: "Kazakh",
        file: "kz.json"
      }
    ]
  },
  ssr: false
});
