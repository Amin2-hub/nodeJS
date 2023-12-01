const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false  //컴포넌트 이름이 한 단어일때 강제로 실행되게해줌
})
