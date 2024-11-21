<script setup>
const { isDarkTheme } = useLayout();
</script>

<template>
    <div :class="isDarkTheme? 'bg-surface-900' : 'bg-surface-0'" class="layout-footer">
        ZachoPixel
        <a href="https://primevue.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">PrimeVue</a>
    </div>
</template>
