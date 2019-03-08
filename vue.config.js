module.exports = {
  configureWebpack: {
    mode: 'development',
    devServer: {
      proxy: {
        "/api": {
          target: "http://www.chiningmeng.top:3000",
          pathRewrite: { "^/api": "" }
        }
      }
    }
  }
}