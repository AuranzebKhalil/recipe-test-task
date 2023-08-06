<template>
   
   <div class="main-container">

    <div class="recipe-img">

    <items/>

    </div>


  <div class="recipe-slect-option">

<itemDetail />
<div v-if="Store.state.popup" class="popo-show">
<popup  />

</div>

        
    </div>

    <div class="recipe-cart">
        <cartdata/>
    </div>

   </div>


</template>
<script setup>

import items from './itemslist.vue'
import itemDetail from './productdetail.vue'
import popup from './popup.vue'
import Store from '../Store/index'
import cartdata from './cart.vue'
import {computed, ref} from 'vue'







</script>
<style lang="scss" scoped>

.main-container{



    width: 100%;
    display: flex;
 
    .recipe-img{
        width: 12%;
    border: 1px solid rgb(196, 195, 195);
    height: 78vh;
overflow: scroll;
    }
    .recipe-slect-option{

        width: 58%;
        border: 1px solid rgb(196, 195, 195);
        height: 78vh;
        display: flex;
    flex-direction: column;
  
    justify-content: space-between;
    }
    .recipe-cart{
width: 30%;
height: 78vh;
border: 1px solid rgb(196, 195, 195);
}

.popup-show{

    position: absolute;
    margin: px 0px 0px 0px;
    background: wheat;
    top: 40%;
    left: 26%;

}

}

</style>