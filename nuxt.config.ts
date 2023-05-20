import { resolve } from "path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'CHROMOPUNCTURE GENEVE - Sarah Imbert-Bétemps',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Mon objectif est de vous guider dans votre évolution grâce à un panel de techniques qui vous permettront de retrouver forme, sérénité, bien-être, équilibre et santé... En tant que thérapeute, j'ai l'intime conviction que nos problématiques physiques récurrentes trouvent souvent leurs origines dans des émotions non intégrées du passé." }
      ],
      link: [],
      script: [],
      htmlAttrs: {
        lang: 'fr'
      }
    }
  },
  css: [
    'assets/css/style.css',
    // 'assets/css/style-static.css',
  ],
  alias: {
    "@": resolve(__dirname, "/"),
    // assets: "/<rootDir>/assets"
  },
  runtimeConfig: {
    // private
    public: {
      apiBase: '',
      googleMapsAPIKey: process.env.GOOGLE_MAPS_API_KEY
    }
  },
  devServer: {
    port: 8080,
  },
  modules: [
    '@nuxtjs/tailwindcss'
  
  ],
  plugins: [
    '~/plugins/runtimeConfig.plugins.ts'
  ]
})
