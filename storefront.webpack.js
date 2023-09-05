const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './base-config': path.resolve(__dirname, 'template/js/netlify-cms/base-config'),
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/html/APrices.html')
    }
  }
})