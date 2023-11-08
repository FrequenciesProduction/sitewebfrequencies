// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  vite: {
    optimizeDeps: {
      include: ["rss-parser"]
    }
  },
  app: {
    head: {
      charset: 'utf-8'
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ]
})
