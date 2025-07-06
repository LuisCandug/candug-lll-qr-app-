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

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: 'http://localhost:8000', // Your backend API base URL
    credentials: true
  },

  auth: {
    strategies: {
      google: {
        clientId: '70577645905-50j187224p7mdr9hga4u9l1rbbte8svd.apps.googleusercontent.com',
        codeChallengeMethod: '', // Or 'S256' if supported by your backend
        responseType: 'code',   // Required for backend-based flow
        redirectUri: 'http://localhost:3000', // Must match your Google Cloud redirect URI

        endpoints: {
          token: 'http://localhost:8000/user/google/',   // Backend endpoint to exchange code for token
          userInfo: 'http://localhost:8000/auth/user/'   // Backend endpoint to get user info after login
        }
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
