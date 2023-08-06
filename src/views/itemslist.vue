<template>
    <div v-for="item in data" :key="item">

<div @click="Aboutrecipe(item)" class="recipe-data">

    <img :src="item.image" alt="">
    <p class="item-name">{{ item.name }}</p>

</div>
</div> 
</template>

<script setup>
import { reactive, onMounted,computed } from 'vue';
import axios from 'axios';
import Store from '../Store';


let data = reactive(Store.state.Apidata)






let some = () =>{

    console.log(state.data)

}

let Aboutrecipe = (item) =>{
    console.log(data)
Store.commit('item_detail', item)

}



</script>


<style lang="scss" >

.recipe-data{

width: 82%;
height: 102px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 5px;
margin-left: 10px;
margin-top: 5px;
border-radius:5px ;
}
.recipe-data img{
    width: 70px;
    height: 70px;
    border-radius: 7px;
    margin-bottom: 3px;
}
.item-name{
width: 100px;
overflow: hidden;
font-size: 10px;
text-align: center;
font-weight: bold;
}

</style>