const pkg = require('./package');
const template = require('./app.template');

module.exports = {
  mode: 'universal',

  router: {
    extendRoutes (routes, resolve) {
      routes.forEach((route, index) => {
        if (route.name === 'adv-vPlayPageId') {
          route.path = '/adv/:vPlayPageId(v_.+)';
        } else if (route.name === 'adv-wPlayPageId') {
          route.path = '/adv/:wPlayPageId(w_.+)';
        }
      });
    }
  },

  render: {
    bundleRenderer: {
      template,
      inject: false
    },
    injectScripts: false
  },

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
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/isLowBrowser'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
