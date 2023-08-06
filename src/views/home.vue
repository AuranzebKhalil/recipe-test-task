<template>

<div class="app">

<navbar />
<SearchSection/>
<recipeSlects/>

</div>


</template>

<script setup>

import navbar from './header.vue'
import SearchSection from './Search.vue'
import recipeSlects from './recipeSlect.vue'

</script>

<style lang="scss" >

// .app{

//     max-width: 1300px;
// max-height: 900px;
// margin: auto;

// }

</style>