// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import { definePreset } from '@primevue/themes'

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{rose.50}',
            100: '{rose.100}',
            200: '{rose.200}',
            300: '{rose.300}',
            400: '{rose.400}',
            500: '{rose.500}',
            600: '{rose.600}',
            700: '{rose.700}',
            800: '{rose.800}',
            900: '{rose.900}',
            950: '{rose.950}'
        }
    }
});

export default defineNuxtConfig({

    compatibilityDate: "2024-10-27",
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@primevue/nuxt-module",
        '@pinia/nuxt',
        "pinia-plugin-persistedstate/nuxt",
    ],

    primevue: {
        autoImport: true,
        options: {
            inputVariant: 'filled',
            ripple: true,
            theme: {
                preset: MyPreset,
                options: {
                    darkModeSelector: '.app-dark',
                }
            }
        }
    },
    

});