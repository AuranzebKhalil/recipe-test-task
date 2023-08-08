

<template>
 <router-view />
</template>

<script lang="ts" setup class="app">

import { onMounted } from "vue";
import store from './Store/index'


onMounted(() => {
    store.dispatch('recipeData')
    store.state.popup = false
});



</script>

<style lang="scss" >



</style>
