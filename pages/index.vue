<script setup>

const images = [
    {
        itemImageSrc: '/img/textures/golden_apple.png',
        thumbnailImageSrc: '/img/textures/golden_apple.png',
        alt: 'img1',
        title: 'Title 0'
    },
    {
        itemImageSrc: '/img/textures/bread.png',
        thumbnailImageSrc: '/img/textures/bread.png',
        alt: 'img1',
        title: 'Title 2'
    },
    {
        itemImageSrc: '/img/textures/ender_eye.png',
        thumbnailImageSrc: '/img/textures/ender_eye.png',
        alt: 'img1',
        title: 'Title 3'
    },
    {
        itemImageSrc: '/img/textures/apple.png',
        thumbnailImageSrc: '/img/textures/apple.png',
        alt: 'img1',
        title: 'Title 1'
    },
    {
        itemImageSrc: '/img/textures/iron_sword.png',
        thumbnailImageSrc: '/img/textures/iron_sword.png',
        alt: 'img1',
        title: 'Title 4'
    },
]

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 2
    }
]);

</script>

<template>
    <div class="grid grid-cols-12 items-center "> 

        <div class="col-span-12 md:col-span-5 md:text-left">
            <div class="text-5xl mb-10">Mis diseños</div>
            <div class="text-xl">Hechos con pasion por el pixel art, mi texturas estan diseñadas en una resolucion 32x32 para ofrecer un nivel agradable de detalles sin olvidar los pixeles. Los colores elejidos fueron seleccionados para ofrecer un ambiente oscuro y serio, alejandose de la alta saturacion de muchos videojuegos actuales</div>
        </div>

        <div class="col-span-12 md:col-span-7 justify-items-center">
            <div class="bg-gradient-to-t from-primary-500 to-30% p-1 mb-10">
                <card class="px-16">
                    <template #content>
                        <Galleria 
                            :value="images" 
                            :responsiveOptions="responsiveOptions" 
                            :numVisible="5" containerStyle="max-width: 400px" 
                            :showItemNavigators="true" 
                            :showThumbnailNavigators="false"
                            :circular="true" 
                            :autoPlay="true" 
                            :transitionInterval="2000"
                        >
                            <template #item="slotProps">
                                <img class="mt-10" :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" width="70%" />
                            </template>
                            <template #thumbnail="slotProps">
                                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
                            </template>
                        </Galleria>
                    </template>
                </card>
            </div>
        </div>

    </div>
</template>

<style scoped>
.p-galleria{
    border-width: 0;
}
</style>

