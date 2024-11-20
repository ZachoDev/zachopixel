<script setup>
import { useLayout } from '/composables/layout';
import { computed, ref, watch } from 'vue';
import AppFooter from '/components/menu/AppFooter.vue'; 
import AppTopbar from '/components/menu/AppTopbar.vue';
import { useRoute } from 'vue-router';

const route = ref(useRoute());

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

        <slot />
        
        <app-footer></app-footer>

        <div class="layout-mask animate-fadein"></div>
    </div>
    <Toast />
</template>