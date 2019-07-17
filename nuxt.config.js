import dotenv from 'dotenv'
import pkg from './package'

dotenv.config()

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#542EA4' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss',
    '~/assets/fonts/fonts.css'
  ],
  styleResources: {
    scss: './assets/scss/variables.scss'
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/universal', ssr: true },
    { src: '~/plugins/mixins', ssr: true },
    { src: '~/plugins/front-only', ssr: false },
    { src: '~/plugins/request', ssr: true }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', {
      manifest: {
        'name': 'FluidAngle Website',
        'short_name': 'fluidangle',
        'start_url': '/',
        'lang': 'en-US',
        'display': 'standalone',
        'background_color': '#fff',
        'theme_color': '#542ea4',
        'description': 'FluidAngle - We build &amp; Develop Digital Products',
        'icons': [{
          'src': '/favicon-16x16.png.png',
          'sizes': '16x16',
          'type': 'image/png'
        }, {
          'src': '/favicon-32x32.png',
          'sizes': '32x32',
          'type': 'image/png'
        }]
      }
    }],
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-MGW96BQ',
      layer: 'dataLayer',
      pageTracking: false,
      dev: true
    }],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000',
    path: '/sitemap.xml',
    gzip: true,
    cacheTime: 1000 * 60 * 15,
    generate: false,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: ['/', '/work', '/about', '/contact']
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'http://localhost:3000/'
  },
  router: {
    linkExactActiveClass: 'active'
  },

  env: {
    ApiUrl: process.env.API_URL || 'http://localhost:1337',
    cloud_name: 'nazarick'
  },
  serverMiddleware: ['~/api/index.js'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    watch: ['api'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
