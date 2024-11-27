<script setup>
import textureImages from '/composables/textureGalleria';
import screenshotImages from '/composables/screenshotGalleria';

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

const isLoaded = ref(false)

onMounted(() => {
    isLoaded.value = true
})

</script>

<template>

    <!-- HEADER IMAGE -->
    <HeaderImage :image="'/img/home.png'">
        <Image class="w-16 lg:w-52 inline-flex mb-8" src="/zacho_logo.png"/>
        <div>
            <h1 class="text-white font-bold text-6xl">ZachoPixel</h1>
            <h5 class="text-white">Original Texture Pack Artist</h5>
        </div>
        <Button class="mt-1 lg:mt-5 !text-white" size="large">
            <router-link to="/texture-packs">See Texture Packs</router-link>
        </Button>
    </HeaderImage>

    <app-body>
            
        <!-- MY TEXTURES -->
        <div class="grid grid-cols-12 items-center justify-strech" v-show="isLoaded"> 

            <div class="col-span-12 md:col-span-5 text-center md:text-left mb-5">
                <h2>Mis diseños</h2>
                <p>Hechos con pasion por el pixel art, mi texturas estan diseñadas en una resolucion 32x32 para ofrecer un nivel agradable de detalles sin olvidar los pixeles. Los colores elejidos fueron seleccionados para ofrecer un ambiente oscuro y serio, alejandose de la alta saturacion de muchos videojuegos actuales</p>
            </div>

            <div class="col-span-12 md:col-span-7 px-0 md:px-20 ">
                    <BorderDetail type="pixel">
                        <card>
                            <template #content>
                                <Galleria
                                    :value="textureImages" 
                                    :responsiveOptions="responsiveOptions" 
                                    :numVisible="5" 
                                    containerStyle="max-width: 300px; margin: auto" 
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
                    </BorderDetail>
            </div>
        </div>

        <hr class="mt-16 mb-16">

        <!-- SCREENSHOTS -->
        <div class="grid grid-cols-12 items-center justify-strech" v-show="isLoaded"> 

            <div class="col-span-12 md:col-span-8 px-0 md:px-20 mb-5">
                    <BorderDetail type="pixel">
                        <card>
                            <template #content>
                                <Galleria
                                    :value="screenshotImages" 
                                    :showThumbnails="false"
                                    :responsiveOptions="responsiveOptions" 
                                    :showItemNavigators="false" 
                                    :showThumbnailNavigators="false"
                                    :circular="true" 
                                    :autoPlay="true" 
                                    :transitionInterval="4000"
                                    :showIndicators="true"
                                    :changeItemOnIndicatorHover="true"
                                >
                                    <template #item="slotProps">
                                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" class="h-[180px] md:h-[340px]" />
                                    </template>
                                </Galleria>
                            </template>
                        </card>
                    </BorderDetail>
            </div>

            <div class="col-span-12 md:col-span-4 text-center md:text-left">
                <h2>Mis texture packs</h2>
                <p>Hechos con pasion por el pixel art, mi texturas estan diseñadas en una resolucion 32x32 para ofrecer un nivel agradable de detalles sin olvidar los pixeles. Los colores elejidos fueron seleccionados para ofrecer un ambiente oscuro y serio, alejandose de la alta saturacion de muchos videojuegos actuales</p>
            </div>

        </div>

        <hr class="mt-16 mb-16">

        <!-- MY MODELS -->
        <BorderDetail type="light">
            <!-- <span class="text-primary">∎</span> -->
            <div class="text-center mb-5 md:mb-0">
                <h2> Mira algunos de mis modelos 3D</h2>
            </div>

            <div class="sketchfab-embed-wrapper"> <iframe class="w-full h-[480px] md:h-[670px]" title="WWI Texture pack, Lebel Rifle" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1952c4e0e9a2445f80c492d637a553fb/embed?autostart=1&camera=0&preload=1&ui_theme=dark"> </iframe> </div>
            
        </BorderDetail>

        <hr class="mt-16 mb-16">

        <!-- VIDEOS -->
        <div class="grid grid-cols-12 justify-items-center" v-show="isLoaded">

            <div class="text-center col-span-12">
                <h2>Puedes mirar algunos de mis videos en Youtube</h2>
            </div>

            <div class="col-span-12 lg:col-span-6">
                <iframe class="mb-5 md:mb-0 w-auto h-auto md:w-[560px] md:h-[310px]" src="https://www.youtube.com/embed/yqnjU0LAXMI?si=f2azRoCRXwkOBrmL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class="col-span-12 lg:col-span-6">
                <iframe class="mb-5 md:mb-0 w-auto h-auto md:w-[560px] md:h-[310px]" src="https://www.youtube.com/embed/cIl0uN8ZeC8?si=PsD0soGuKp_w5nIf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </div>
    
        <hr class="mt-16 mb-16">

        <!-- KOFI -->
        <div class="grid grid-cols-12 items-center mb-10 text-center"> 

            <div class="col-span-12 md:col-span-6">
                <div>
                    <h2>Apoya mi trabajo mmgvo!</h2>
                    <p>Si te gusta mi trabajo, puedes apoyarme en Kofi</p>
                </div>
                <Button class="mt-5 mb-5 !text-white">Me brindas un café?</Button>
            </div>

            <div class="col-span-12 md:col-span-6">
                <BorderDetail type="pixel">
                    <Card>
                        <template #title>
                            <h2>Top Kofi's supporter</h2>
                        </template>
                        <template #content>
                            <div class="items-left mb-5"><p class="pi pi-user mr-5"/> Person 1</div>
                            <div class="items-left mb-5"><p class="pi pi-user mr-5"/> Person 2</div>
                            <div class="items-left mb-5"><p class="pi pi-user mr-5"/> Person 3</div>
                        </template>
                    </Card>
                </BorderDetail>
            </div>

        </div>

    </app-body>

</template>

<style>
</style>