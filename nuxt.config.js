export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Personal Web Page | Dea K',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/small-icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/svg'
    ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/i18n', {
      locales: [
        {
          name: 'Hrvatski',
          code: 'hr',
          iso: 'hr-HR',
          file: 'hr'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en'
        },
      ],
      lazy: true,
      langDir: 'locales/',
      defaultLocale: 'hr',
      parsePages: false,
      pages: {
        about: {
          hr: '/o-meni',
          en: '/about'
        }
      }
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
