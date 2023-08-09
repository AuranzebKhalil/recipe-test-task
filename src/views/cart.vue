<template>  

<div class="myCart"><div><img src="../assets/support.png" alt="">Watting Customer(Edit)</div><div v-if="Pickup"><img src="../assets/store.png" alt=""> Select Pickup (opt)</div><div v-if="Delivery"><img src="../assets/delivery.png" alt="">Select Delivery (opt)</div> <div v-if="Dining"><img src="../assets/cutlery.png" alt=""> Select Table</div></div>
 

<div class="cart">

    
    <div class="shopping" v-if="cartdata.length === 0">
        <img src="../assets/shopping-cart-empty-side-view.png" alt="">
      
      <h2>Empty</h2>  
    </div>

    <div class="cartLoopData" v-for="item in cartdata" :key="item">


      <div>
 <img :src="item.image" alt="" />

 <div class="control">
     

     <div class="Quantity">
       <div @click="decrement(item.Quantity--)">-</div>
       <h5>{{ item.Quantity }}</h5>
       <div @click="increment(item.Quantity++)">+</div>
     </div>
   </div>



      </div>

     
     

      <div class="content">
     
        <p>{{ item.name }}</p>

     
      </div>


      <div>


        <div class="divider">

          <span><p>{{ item.price }}x{{ item.Quantity }} </p></span>
          
 

        </div>

        <div class="dividers">


          <span><p>{{ item.price *item.Quantity }} </p></span>


</div>


<div class="buttons">  
  <span>
  Modifiers
</span>
<span>
  Edit
</span>
<p @click="close(item.id)">
  Remove
</p>

</div>

      

      </div>
    </div>
 
  </div>

  <div class="payment">

    <div class="three-dives">
        <div><span>
            <h5>SubTotal</h5>
            <h5>0.05$</h5>
        </span></div>
        <div><span>
            <h5>Discount</h5>
            <h5>0.00$</h5>
        </span></div>
        <div><span>
            <h5>Tax</h5>
            <h5>0.00$</h5>
        </span></div>
    </div>

    <div class="total">

        <div ><span>
            <h5>SubTotal</h5>
            <h5>{{productsWithTotal}}$</h5>
        </span></div>


    </div>


  </div>
</template>

<script setup>
import { reactive } from "vue";
import Store from "../Store";
import {computed} from 'vue';
let cartdata = reactive(Store.state.AddToCart);


let Dining = computed(()=>{

  if(Store.state.ActiveOption === 'Dining'){

    return true
  }else{
    return false
  }

})



let Delivery = computed(()=>{

if(Store.state.ActiveOption === 'Delivery'){

  return true
}else{
  return false
}

})



let Pickup = computed(()=>{

if(Store.state.ActiveOption === 'Pickup'){

  return true
}else{
  return false
}

})

const productsWithTotal = computed(() => {
  let total = 0;
  Store.state.AddToCart.map((product) => {
    total += product.Quantity * product.price;
  });
  return total;
});


let close = (id) => {
  const index = cartdata.findIndex((item) => item.id === id);
  if (index !== -1) {
    cartdata.splice(index, 1);
  }
};

</script>

<style lang="scss" scoped>

.simplebar-content {
  
  scrollbar-width: thin;
  scrollbar-color: #888 #3b3a3a;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
}



.divider{
  margin-top: 10px;
    width: 114px;

    height: 40px;
    border-left: 1px solid;
    border-bottom: 1px solid;
    padding: 5px;
    padding-top: 9px;

  

}

.buttons{

  display: flex;
  margin-bottom: 1px;
  display: flex;
    margin-top: 47px;
    position: absolute;
    right: 42px;
    gap: 8px;
    font-size: 13px;
    font-weight: 800;

  span{

color: rgb(25, 25, 219);
cursor: pointer;

  }

  p{
    color: red;
    cursor: pointer;
  }

}
.dividers{

  width: 105px;
  margin-right: 10px;
  height: 30px;
  border-left: 1px solid;
  padding: 5px;

 
  

}

.payment{

    width: 100%;
    height: 70px;

    .three-dives{

        height: 30px;
        width: 100%;

        display: flex;
        gap: 1px;

        div{

            width: 33%;
            height: 33px;
            border: 1px solid rgb(192, 189, 189);
            font-size: 13px;
            padding-left: 5px;
            border-radius: 5px;
            background-color: #ebe8e8;
            

        }

    }


    .total{
        display: flex;
        align-items: center;
        justify-content: space-between;

        div{

            width: 100%;
            margin-top: 5px;
            height: 38px;
            border: 1px solid rgb(192, 189, 189);
            font-size: 13px;
            padding-left: 5px;
            border-radius: 5px;
            background-color: #ebe8e8;
        }

    }

}
.shopping{

    margin-top: 20px;

    img{

        width: 52px;
    }

    h2{
        font-size: 20px;
    font-family: inherit;
    color: #777070;
    margin-top: -14px;
    }

}


.myCart{

    color: rgb(75, 66, 66);
    width: 96%;
    margin-left: 3px;
    height: 30px;
    border: 1px solid #c3bbbb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3px;

    div{
 
        display: flex;
        align-items: center;
        justify-items: center;
        font-size: 13px;
        font-weight: 600;
        padding-left: 7px;
        padding-right: 7px;

        img{

            width: 20px;
            height: 20px;

        }

    }

}
.cart {
  width: 100%;
  height: 62vh;

    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: baseline;
    flex-direction: column;

  .content{

    padding: 5px 5px 5px 5px;
    width: 75%;

  }

  .cartLoopData {
    display: flex;
    width: 92%;
    border-radius: 8px;
    border: 1px solid rgb(235, 229, 229);
    background: rgb(243, 241, 241);
    margin-top: 10px;

    img {
        width: 105px;
    height: 116px;
      border-radius: 8px;
    }

    .title-price {

        display: flex;
        align-items: center;
        justify-content: space-between;

        div{

            width: 20px;
    cursor: pointer;
    border: 1px solid rgb(40, 138, 40);
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    color:rgb(40, 138, 40);
    margin-right: -21px;
    margin-top: -10px;
        }

      h3 {
        font-size: 16px;
        color: rgb(128, 126, 126);
        padding-top: 4px;
      }

      h4 {
        font-size: 18px;
        color: rgb(128, 126, 126);
        padding-top: 10px;
      }
    }

  

  }

  .control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 7px;
    margin-top: 4px;
  }

  .Quantity {
    display: flex;
    gap: 8px;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    margin-bottom: 7px;

    div {
   
      cursor: pointer;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
    }
  }
}
</style>
