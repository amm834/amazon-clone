import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
        experimental: {
            reactivityTransform: true
        },
        runtimeConfig: {
            public: {
                apiBase: '',
            }
        },
        router: {
            mode: 'history'
        },
        css: [
            '@/main.scss'
        ]
    }
)
