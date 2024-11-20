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
        numVisible: 5
    },
    {
        breakpoint: '575px',
        numVisible: 5
    }
]);

</script>

<template>

    <!-- HEADER IMAGE -->
    <HeaderImage :image="'/img/home.png'">
        <template #content>
            <Image class="w-16 lg:w-52 inline-flex" src="/zacho_logo.png"/>
            <div>
                <div class="mt-5 text-xl">Welcome to</div>
                <div class="font-bold text-4xl lg:text-7xl">ZachoPixel</div>
                <div class="text-xl inline-flex">Original Texture Pack Artist</div>
            </div>
            <Button class="mt-1 lg:mt-5 !text-white" size="large">
                <router-link to="/texture-packs">See Texture Packs</router-link>
            </Button>
        </template>
    </HeaderImage>

    <app-body>

        <!-- MY TEXTURES -->
        <div class="grid grid-cols-12 items-center "> 

            <div class="col-span-12 md:col-span-5 md:text-left">
                <div class="text-5xl mb-10">Mis diseños</div>
                <div class="text-xl">Hechos con pasion por el pixel art, mi texturas estan diseñadas en una resolucion 32x32 para ofrecer un nivel agradable de detalles sin olvidar los pixeles. Los colores elejidos fueron seleccionados para ofrecer un ambiente oscuro y serio, alejandose de la alta saturacion de muchos videojuegos actuales</div>
            </div>

            <div class="col-span-12 md:col-span-7 justify-items-center text-center">
                <div class="bg-gradient-to-t from-primary-500 to-30% p-1 mb-10 mx-10">
                    <card>
                        <template #content>
                            <Galleria
                                :value="images" 
                                :responsiveOptions="responsiveOptions" 
                                :numVisible="5" 
                                containerStyle="max-width: 400px; margin: auto" 
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

        <!-- MY MODELS -->
        <div class="sketchfab-embed-wrapper"> <iframe title="WWI Texture pack, Lebel Rifle" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="769" src="https://sketchfab.com/models/1952c4e0e9a2445f80c492d637a553fb/embed?autostart=1&camera=0&preload=1&ui_theme=dark"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/wwi-texture-pack-lebel-rifle-1952c4e0e9a2445f80c492d637a553fb?utm_medium=embed&utm_campaign=share-popup&utm_content=1952c4e0e9a2445f80c492d637a553fb" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> WWI Texture pack, Lebel Rifle </a> by <a href="https://sketchfab.com/zachopixel?utm_medium=embed&utm_campaign=share-popup&utm_content=1952c4e0e9a2445f80c492d637a553fb" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> zachopixel </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1952c4e0e9a2445f80c492d637a553fb" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
    
        <!-- KOFI -->
        <div class="grid grid-cols-12 items-center mb-10"> 
            <div class="col-span-12 md:col-span-6">
                <div>
                    <h1>Apoya mi trabajo</h1>
                    <p>Si te gusta mi trabajo, puedes apoyarme en Patreon</p>
                </div>
            </div>
        </div>

    </app-body>

</template>

<style>
</style>