<script setup>
import { useLayout } from '/composables/layout';
import { computed, ref, watch } from 'vue';
import AppFooter from '/components/menu/AppFooter.vue'; 
import AppSidebar from '/components/menu/AppSidebar.vue';
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

        <div class="relative" >
            
            <img src="/img/home.png" width="100%"/>
            
            <div class="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] flex flex-col items-center text-center !text-white">
                <Image class="w-16 lg:w-52 hidden lg:inline-flex" src="/zacho_logo.png"></Image>
                <div>
                    <div class="mt-12 lg:mt-5 text-xs lg:text-xl">Welcome to</div>
                    <div class="font-bold text-xl lg:text-7xl">ZachoPixel</div>
                    <div class="text-xs lg:text-xl hidden lg:inline-flex">Original Texture Pack Artist</div>
                </div>
                <Button class="mt-1 lg:mt-5 !text-white !rounded-none !bg-rose-600" size="large">See Texture Packs</Button>
            </div>

            <img class="absolute bottom-0" src="/img/pixel-footer.png" width="100%"/>
        </div>

        <div class="layout-main-container">
            <div class="layout-main">
                <slot />
            </div>
            <app-footer></app-footer>
        </div>

        <div class="layout-mask animate-fadein"></div>
    </div>
    <Toast />
</template>