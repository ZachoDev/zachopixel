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

        <HeaderImage :image="'public/img/home.png'">
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