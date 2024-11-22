<script setup>
import { useLayout } from '/composables/layout';
// import { onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const { layoutState, setActiveMenuItem, onMenuToggle } = useLayout();

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    compact: {
        type: Boolean,
        default: false
    },
    index: {
        type: Number,
        default: 0
    },
    root: {
        type: Boolean,
        default: true
    },
    parentItemKey: {
        type: String,
        default: null
    }
});

// const compact = ref(props.compact);
// const isActiveMenu = ref(false);
// const itemKey = ref(null);

// onBeforeMount(() => {
//     itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index);

//     const activeItem = layoutState.activeMenuItem;

//     isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(itemKey.value + '-') : false;
// });

// watch(
//     () => layoutState.activeMenuItem,
//     (newVal) => {
//         isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
//     }
// );

function itemClick(event, item) {
    if (item.disabled) {
        event.preventDefault();
        return;
    }

    if ((item.to || item.url) && (layoutState.staticMenuMobileActive || layoutState.overlayMenuActive)) {
        onMenuToggle();
    }

    if (item.command) {
        item.command({ originalEvent: event, item: item });
    }

    const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey) : itemKey.value;

    setActiveMenuItem(foundItemKey);
}

function checkActiveRoute(item) {
    return route.path === item.to;
}
</script>

<template>
    <router-link v-if="item.to && !item.items && item.visible !== false" @click="itemClick($event, item, index)" :class="[item.class, { 'active-route': checkActiveRoute(item) }]" tabindex="0" :to="item.to">
        <p v-if="compact">{{ item.label }}</p>
        <span v-else>{{ item.label }}</span>
    </router-link>
    <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
        <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
            <app-menu-item v-for="(child, i) in item.items" :key="child" :index="i" :item="child" :parentItemKey="itemKey" :root="false" :compact="compact"></app-menu-item>
        </ul>
    </Transition>
</template>

<style scoped></style>
