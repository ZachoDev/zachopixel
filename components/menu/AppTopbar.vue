<script setup>
import { useLayout } from '/composables/layout';
import AppConfigurator from '/components/menu/AppConfigurator.vue';
import AppMenuItem from '/components/menu/AppMenuItem.vue';
import MenuItems from '/composables/menuItems.js';

const items = MenuItems;

const { toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
    <div class="layout-topbar">

        <!-- LOGO -->
        <div class="layout-topbar-logo-container">
            <router-link to="/" class="layout-topbar-logo">
                <Image src="/zacho_logo.png" alt="logo" class="" width="32" />ZachoPixel
            </router-link>
        </div>

        <!-- MENU ITEMS -->
        <div class="mx-auto hidden lg:inline-block">
            <ul class="layout-menu">
                <template v-for="(item, i) in items" :key="item">
                    <div>
                        <AppMenuItem :item="item" :index="i"></AppMenuItem>
                    </div>
                </template>
            </ul>
        </div>

        <!-- DARKMODE AND COLORS -->
        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" @click="toggleDarkMode">
                    <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
                </button>
                <div class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                        type="button"
                        class="layout-topbar-action layout-topbar-action-highlight"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </div>
            </div>

            <button
                class="layout-topbar-menu-button layout-topbar-action"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
            >
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <!-- MENU MOBILE -->
            <div class="layout-topbar-menu hidden lg:hidden">
                
                <div class="layout-topbar-menu-content">

                    <div v-for="(item, i) in items" :key="item">
                        <AppMenuItem :item="item" :index="i" :compact="true"></AppMenuItem>
                    </div>

                    <!-- <button type="button" class="layout-topbar-action">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button> -->
                </div>
            </div>

        </div>
    </div>
</template>
