// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import { definePreset } from '@primevue/themes'

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
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