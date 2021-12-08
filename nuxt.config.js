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
      { rel: 'icon', type: 'image/x-icon', href: '/personal-web-page/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/personal-web-page/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/personal-web-page/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/personal-web-page/favicon-16x16.png' },
      { rel: 'manifest', href: '/personal-web-page/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.css',
    '@/assets/styles/animations.scss'
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
    '@nuxt/image'
  ],
  image: {
    screens: {
      // xs: 320,
      // sm: 640,
      // md: 768,
      md: 905,
      lg: 1024,
      xl: 1280,
      xxl: 1920,
      '2xl': 1920
    },
  },
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },
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
