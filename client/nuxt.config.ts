import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    css: [
        'assets/css/default.css',
        'assets/css/font-awesome/css/all.css',
        '@/main.scss',
    ],
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
    auth: {
        strategies: {
            local: {
                token: {
                    property: 'token',
                    global: true,
                },
                user: {
                    property: 'user',
                },
                endpoints: {
                    login: {url: '/api/auth/login', method: 'post'},
                    logout: true,
                    user: {url: '/api/auth/user', method: 'get'}
                }
            }
        }
    }
});