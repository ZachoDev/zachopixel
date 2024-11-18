// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import { definePreset } from '@primevue/themes'
import customComponents from "./assets/components/customComponents";

const MyPreset = definePreset(Aura, {
    semantic: {

        primary: {
            50: '{rose.500}',
            100: '{rose.500}',
            200: '{rose.500}',
            300: '{rose.500}',
            400: '{rose.600}',
            500: '{rose.500}',
            600: '{rose.700}',
            700: '{rose.700}', 
            800: '{rose.700}',
            900: '{rose.700}',
            950: '{rose.700}'
        },

        colorScheme: {
            light: {
                borderRadius: '0px',
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                }
            },
            
            dark: {
                borderRadius: '0px',
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                }
            }
        },  
    },

    components: customComponents 

});

export default defineNuxtConfig({

    compatibilityDate: "2024-10-27",
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@primevue/nuxt-module",
        "@pinia/nuxt",
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