// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n"
  ],
  ui: {
    global: true,
    icons: ['heroicons', 'ph'],
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode"
  },

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
        name: "Қазақша",
        file: "kz.json"
      }
    ]
  },
  ssr: false
});
