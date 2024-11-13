import { defineStore } from 'pinia'

export const useConfigurationStore = defineStore('configuration', () => {
    const darkTheme = ref(false);

    return { darkTheme }
},
{
    persist: true,
})