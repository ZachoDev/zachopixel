<script setup>
import { useLayout } from '/composables/layout';
import { onBeforeMount } from 'vue';

const { isDarkTheme, loadDarkMode } = useLayout();

onBeforeMount(() => {
    if (isDarkTheme.value) {
        loadDarkMode();
    }
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style scoped></style>