<template>

<div class="container">


<button class="back-btn ">  <img src="../assets/back.png" alt="">Back </button>

<button class="back-btn " @click="clear" >  <img src="../assets/close.png" alt="">Clear all </button>

<div class="order-type-inputs">


<select @click="process" v-model="slectOption" class="sleact" >
        <option value="Dining">Order Type : Dining</option>
        <option value="Pickup">Order Type : Pickup</option>
        <option value="Delivery">Order Type : Delivery</option>
    </select>


    <span>
        >
    </span>

</div>
<input type="text" class="order-type-input" v-model="SearchByname" placeholder="Search product by name" >



<button class="Notes-btn ">  <img src="../assets/notes.png" alt="">Notes </button>
<button class="Kitchen-btn ">  <img src="../assets/cutlery.png" alt="">Kitchen </button>
<button class="Process-btn" >  <img src="../assets/process.png" alt="">In Process </button>

</div>

  </template>
<script setup>
import { ref } from "vue"
import Store from "../Store/index"


let clear = () =>{
    Store.state.itemDetail = []
}

let slectOption = ref('')


let SearchByname = ref('')

let process = () =>{

    console.log(slectOption.value)

    Store.state.ActiveOption = slectOption.value

}



</script>

<style lang="scss" >


.sleact{

    width: 100%;
    outline: none;
   

    option{

        width: 100%;
        height: 200px;

    }

}

.container{

    display: flex;
    gap: 2px;

height: 80px;
align-items: center;
padding-left: 20px;
width: 100%;



.back-btn{

    width: 100px;
    border: 1px solid #a7a7a7;
    height: 41px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 8px;

}

.Notes-btn{

    width: 100px;
    border: 1px solid #a7a7a7;
    height: 41px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 8px;
    background: rgb(237, 237, 245);

}


.Kitchen-btn{

width: 100px;
border: 1px solid #f5f3f3;
height: 41px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 12px;
border-radius: 8px;
background: rgb(230, 216, 192);

}



.Process-btn{

width: 100px;
border: 1px solid #ffffff;
height: 41px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 12px;
border-radius: 8px;
background: rgb(176, 184, 176);

}

.order-type-inputs{

    width: 25%;
    border: 1px solid #a7a7a7;
    padding-left: 10px;
    padding-right: 10px;
    height: 41px;
    color: black;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    padding-left: 10px;
    border-radius: 8px;
    outline: none;
}
.order-type-input{
 
    width: 25%;
    border: 1px solid #a7a7a7;
    height: 41px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    padding-left: 10px;
    border-radius: 8px;
    outline: none;



}
}

</style>