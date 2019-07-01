module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bloctheorym.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'bloctheorym.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-140586561-1'
    }],
    'nuxt-rfg-icon',
    '@nuxtjs/manifest'
  ],
  /*
  ** Global CSS
  */
  css: [
    { src: 'bulma/bulma.sass', lang: 'sass' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    { src: '@/assets/styles/helpers.css',lang: 'css' },
    { src: '@/assets/styles/spacing.css', lang: 'css'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

