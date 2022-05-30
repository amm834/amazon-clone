import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    css: [
        'assets/css/default.css',
        'assets/css/font-awesome/css/all.css',
        '@/main.scss',
    ]
})
