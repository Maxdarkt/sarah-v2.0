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
      link: [
        // {
        //   rel: 'preconnect',
        //   href: 'https://fonts.googleapis.com'
        // },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        //   crossorigin: ''
        // }
      ],
      script: [
        // {
        //   src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        //   type: "text/javascript"
        // }, 
        // {
        //   src: 'assets/js/jquery.mb.YTPlayer.js'
        // },
        // {
        //   src: 'assets/js/plugins.js'
        // },
        // {
        //   src: './modernizr.custom.js'
        // }
      ],
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
})
