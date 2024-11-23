<!-- HeaderImage.vue -->
<script setup>
import { useLayout } from '/composables/layout';
const { isDarkTheme } = useLayout();

const props = defineProps({
    image: {
        type: String,
        default: '/img/home.png'
    }
});
</script>

<template>
    <div :style="{ backgroundImage: `url(${props.image})` }" class="h-[500px] md:h-[760px] bg-no-repeat bg-cover bg-center relative bg-fixed">
        <div class="opacity-40 absolute inset-0 bg-gradient-to-t from-black from-5% to-60% via-transparent to-transparent"></div>

        <div class="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] flex flex-col items-center text-center !text-white">
            <slot />
        </div>
        <img class="absolute bottom-0" :src="isDarkTheme ? '/img/pixel-bottom-dark.png' : '/img/pixel-bottom-white.png'" width="100%"/>
    </div>
</template>