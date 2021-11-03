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
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'Dry and clean code is my mode!'
      },
      { hid: 'og:title', property: 'og:title', content: 'Personal Web Page | Dea K' },
      { hid: 'og:description', property: 'og:description', content: 'Dry and clean code is my mode!' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Personal Web Page | Dea K' },
      { hid: 'og:type', property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/small-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
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
    }],
    ['vue-scrollto/nuxt', {
      duration: 1000,
      easing: "ease-in-out",
      offset: 0,
      container: "body"
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    base: '/personal-web-page/'
  },
  robots: {
    Sitemap: 'https://suncica-negra.github.io/personal-web-page/sitemap.xml',
    UserAgent: '*',
    Disallow: ''
  },
}
