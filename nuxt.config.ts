// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  // devServer: {
  //   port: 3000,
  //   host: '0.0.0.0'
  // },
  typescript: {
    typeCheck: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "./src/assets/styles/default.less";'
        }
      }
    }
  }
});
