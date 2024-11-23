<!-- <template>
    <div class="bg-gradient-to-t from-primary-500 to-30% p-1 mb-10 mx-10">
        <slot></slot>
    </div>
</template> -->

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'light'
    }
})
</script>

<template>
    <div v-if="props.type === 'light'" class="bg-gradient-to-t from-primary-500 to-30% p-1 mb-10 mx-10">
        <slot></slot>
    </div>

    <div v-if="props.type === 'pixel'" class="relative">
        <slot></slot>
        <Image class="absolute bottom-[-5px] left-[-5px] w-28" src="/img/pixel-corner.png"></Image>
        <Image class="absolute bottom-[-5px] right-[-5px] w-28" src="/img/pixel-corner.png" style="transform: scaleX(-1);"></Image>
    </div>
</template>