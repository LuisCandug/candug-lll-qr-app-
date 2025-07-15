import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,

  head: {
    titleTemplate: '%s - lcandug',
    title: 'lcandug',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [],

  plugins: [
    { src: '~/plugins/html5-qrcode.client.js', mode: 'client' } // ✅ Added plugin
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: 'http://localhost:8000',
    credentials: true
  },

  auth: {
    redirect: {
      login: '/auth/signin',
      logout: '/auth/signin',
      callback: '/auth/callback',
      home: '/'
    },
    autoFetchUser: false,
    strategies: {
      google: {
        clientId: '70577645905-50j187224p7mdr9hga4u9l1rbbte8svd.apps.googleusercontent.com',
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        responseType: 'token id_token',
        scope: ['openid', 'profile', 'email'],
        redirectUri: 'http://localhost:3000/auth/callback',
        codeChallengeMethod: ''
      }
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
}
