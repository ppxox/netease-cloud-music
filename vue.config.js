module.exports = {
  configureWebpack: {
    mode: 'development',
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          pathRewrite: { "^/api": "" }
        }
      }
    }
  }
}