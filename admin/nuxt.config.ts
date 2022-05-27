import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
        router: {
            mode: 'history'
        },
        css: [
            '@/main.scss'
        ]
    }
)
