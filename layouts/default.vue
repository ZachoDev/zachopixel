<script setup>
import { useLayout } from '/composables/layout';
import { computed, ref, watch } from 'vue';
import AppFooter from '/components/menu/AppFooter.vue'; 
import AppTopbar from '/components/menu/AppTopbar.vue';

const { layoutConfig, layoutState, isSidebarActive, resetMenu, loadDarkMode, isDarkTheme } = useLayout();

const outsideClickListener = ref(null);


watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

const containerClass = computed(() => {
    return {
        'layout-mobile-active': layoutState.staticMenuMobileActive
    };
});

function bindOutsideClickListener() {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                resetMenu();
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
}

function unbindOutsideClickListener() {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
}

function isOutsideClicked(event) {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
}

</script>

<template>
    <div class="layout-wrapper" :class="containerClass">

        <app-topbar></app-topbar>

        <div class="bg-[url('public/img/home.png')] h-[500px] md:h-[760px] bg-cover bg-center relative" >
            <img class="absolute bottom-0" :src="isDarkTheme ? '/img/pixel-bottom-dark.png' : '/img/pixel-bottom-white.png'" width="100%"/>
            <!-- <div class="bg-[url('public/img/pixel-bottom-dark.png')] h-[100px] md:h-[100px] bg-cover bg-center absolute bottom-0" /> -->
            <div class="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] flex flex-col items-center text-center !text-white">
                <Image class="w-16 lg:w-52 inline-flex" src="/zacho_logo.png"/>
                <div>
                    <div class="mt-5 text-xl">Welcome to</div>
                    <div class="font-bold text-4xl lg:text-7xl">ZachoPixel</div>
                    <div class="text-xl inline-flex">Original Texture Pack Artist</div>
                </div>
                <Button class="mt-1 lg:mt-5 !text-white" size="large">
                    <router-link to="/texture-packs" >See Texture Packs</router-link>
                </Button>
            </div>
        </div>
        

        <div class="container text-center mx-auto mt-20 px-[1rem] lg:px-auto 2xl:px-[20rem]">
            <div>
                <slot />
            </div>
            <app-footer></app-footer>
        </div>

        <div class="layout-mask animate-fadein"></div>
    </div>
    <Toast />
</template>