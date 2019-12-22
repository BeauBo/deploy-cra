const path = require('path')
const config = require('./server/configure')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    before: config
  }
}