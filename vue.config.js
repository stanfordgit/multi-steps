const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/utils/variables.scss";'
      }
    }
  },
  transpileDependencies: true
})
