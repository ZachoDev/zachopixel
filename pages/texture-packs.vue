<script setup>
import { Image } from 'primevue';

const theming = {
    colorScheme: {
            light: {
                root: {
                    'tab.background': '',
                    'tab.hover.background': '',
                    'tab.active.background': '',
                    'tabpanel.background': '',
                    'tabpanel.background': '',
                    'nav.button.background': '',
                    'active.bar.background': '',
                    'tablist.background': '',
                },
            },
            dark: {
                root: {
                    'tab.background': '',
                    'tab.hover.background': '',
                    'tab.active.background': '',
                    'tabpanel.background': '',
                    'tabpanel.background': '',
                    'nav.button.background': '',
                    'active.bar.background': '',
                    'tablist.background': '',
                },
            }
        }
}
</script>

<template>

    <!-- HEADER IMAGE -->
    <HeaderImage :image="'/img/home.png'">
        <Image class="w-16 lg:w-52 inline-flex mb-8" src="/zacho_logo.png"/>
        <div>
            <h1 class="text-white font-bold text-6xl">Texture Packs</h1>
        </div>
    </HeaderImage>

    <app-body>
        <Tabs value="0" :dt="theming" >

            <TabList class="mb-10">
                <Tab value="0">Description</Tab>
                <Tab value="1">Gallery</Tab>
                <Tab value="2">Wiki</Tab>
            </TabList>
            
            <TabPanels  >

                <!-- DESCRIPTION -->
                <TabPanel value="0" >
                    
                    <div class="grid grid-cols-12 gap-5">

                        <!-- LEFT -->
                        <div class="col-span-12 sm:col-span-8 items-center text-center md:text-left">

                            <!-- Pack -->
                            <div class="grid grid-cols-12 gap-1">

                                <div class="col-span-12 md:col-span-4">
                                    <img class="mx-auto w-48" src="/img/thalyrus2-logo.png" alt="thalyrus2-logo">
                                </div>
                                <div class="col-span-12 md:col-span-8">
                                    <h1>Thalyrus Medieval Warfare</h1>
                                    <p>Hechos con pasion por el pixel art, mi texturas estan diseñadas en una resolucion 32x32 para ofrecer un nivel agradable de detalles sin olvidar los pixeles. </p>
                                </div>

                            </div>
                            
                            <hr class="mx-5 mt-16 mb-16">
                            
                            <!-- Items -->
                            <div class="grid grid-cols-12">

                                <div class="col-span-12 md:col-span-8">
                                    <h3>Items</h3>
                                    <p>Hechos con pasion por el pixel art, mi texturas estan diseñadas en una resolucion 32x32 para ofrecer un nivel agradable de detalles sin olvidar los pixeles. </p>
                                </div>
                                <div class="col-span-12 md:col-span-4">
                                    <img class="mx-auto w-48" src="/img/textures/iron_sword.png" alt="iron_sword">
                                </div>
                                
                            </div>

                            <hr class="mx-5 mt-16 mb-16">

                            <!-- GUI -->
                            <div class="grid grid-cols-12">
                                
                                <div class="col-span-12 md:col-span-4">
                                    <Image class="h-[200px] mx-auto" src="/img/thalyrus2-logo.png" alt="thalyrus2-logo"></Image>
                                </div>
                                <div class="col-span-12 md:col-span-8">
                                    <h1>Thalyrus Medieval Warfare</h1>
                                    <p>Hechos con pasion por el pixel art, mi texturas estan diseñadas en una resolucion 32x32 para ofrecer un nivel agradable de detalles sin olvidar los pixeles. </p>
                                </div>
                                
                            </div>

                        </div>

                        <!-- RIGHT -->
                        <div class="col-span-12 md:col-span-4">
                            <Card>
                                <template #content>
                                    <div>
                                        <h3>About</h3>
                                        <p>Version: 0.6 Alpha</p>
                                        <p>Created: 11/01/18</p>
                                        <p>Updated: Jul 01, 2024</p>
                                        <p>Author: Zacho</p>
                                        <hr class="mx-5">
                                        
                                        <h3>Downloads</h3>
                                        <div class="group flex items-center justify-between mb-5">
                                            <div class="ltr:ml-3 rtl:mr-3">
                                                <span class="font-bold text-xl">Thalyrus II</span><br>for MC 1.20.1
                                            </div>
                                            <Button>
                                                <i class="pi pi-download" style="font-size: 2rem"></i>
                                            </Button>
                                        </div>
                                        <div class="group flex items-center justify-between mb-5">
                                            <div class="ltr:ml-3 rtl:mr-3">
                                                <span class="font-bold text-xl">Thalyrus II</span><br>for MC 1.20
                                            </div>
                                            <Button>
                                                <i class="pi pi-download" style="font-size: 2rem"></i>
                                            </Button>
                                        </div>
                                        <div class="group flex items-center justify-between mb-5">
                                            <div class="ltr:ml-3 rtl:mr-3">
                                                <span class="font-bold text-xl">Thalyrus II</span><br>for MC 1.19
                                            </div>
                                            <Button>
                                                <i class="pi pi-download" style="font-size: 2rem"></i>
                                            </Button>
                                        </div>

                                        <p class="text-red-500">Not available for bedrock edition</p>

                                        <Button class="w-[100%]">
                                            <p class="!mb-0 !text-white">Check pack Wiki</p>
                                        </Button>
                                    </div>
                                </template>
                            </Card>
                        </div>

                        <div>
                            
                        </div>

                    </div>
                </TabPanel>

                <TabPanel value="1">
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>

                <TabPanel value="2">
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>

            </TabPanels>
        </Tabs>
    </app-body>

</template>

