const { defineConfig } = require('@vue/cli-service')
const target = 'proxy 요청을 보낼 서버주소'

module.exports = 
  defineConfig({
  transpileDependencies: true}) 
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch') //prefetch 삭제
  },
  devServer: {
    port: 8080,
    proxy: { //porxy 요청을 보낼 api 시작 부분
      '^/api': {
        target,
        changeOrigin: true
      }
    }
  }
}

