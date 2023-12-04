const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer : {    //devServer : 개발하는동안 쓰는 서버
    port : 8080,
    proxy : {
      '^/api':{
        target,
        changeOrigin : true,
        ws : false,    //웹소켓설정
        pathRewrite : { '^/api' : '/' }  //경로를 다시쓰는것 /api -> / 로시작하는걸로 바꿈
      }
    }
  }
})
