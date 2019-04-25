var path = require('path');
var webpack = require('webpack');

const PrerenderSPAPlugin = require('prerender-spa-plugin');
// Renders headlessly in a downloaded version of Chromium through puppeteer
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/scss/_variables.scss";
          `
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          use: 'raw-loader'
        }
      ]
    },
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'), // The path to the folder where index.html is.
        routes: ['/','/decarb-time-calculator','/dosage-calculator'], // List of routes to prerender.
        renderer: new PuppeteerRenderer()
      })
    ]
  }
}
