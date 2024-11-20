<!-- HeaderImage.vue -->
<script setup>
import { useLayout } from '/composables/layout';
const { isDarkTheme } = useLayout();

const props = defineProps({
    image: {
        type: String,
        default: 'public/img/home.png'
    }
});
</script>

<template>
    <div :class="`bg-[url('${props.image}')]`" class=" h-[500px] md:h-[760px] bg-no-repeat bg-cover bg-center relative">
        <img class="absolute bottom-0" :src="isDarkTheme ? '/img/pixel-bottom-dark.png' : '/img/pixel-bottom-white.png'" width="100%"/>
        <div class="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] flex flex-col items-center text-center !text-white">
            <slot name="content"/>
        </div>
    </div>
</template>