<template>
  <div >
    <div  v-for="item in popupdata" :key="item">
      <div>
        <img :src="item.image" alt="" />

        <div>
          <span>
            <h3>{{ item.name }}</h3>

            <div @click="close">X</div>
          </span>

          <p>{{ item.description }}</p>
          <h4>${{ item.price }}</h4>

          <div>
            Quantity :
            <div >
              <div @click="decrement(item.Quantity --)">-</div>
              <h5>{{ item.Quantity }}</h5>
              <div @click="increment(item.Quantity ++)">+</div>
            </div>
          </div>
        </div>
      </div>

      <button  @click="AddToCart(item)">Add to Cart - ${{ item.Quantity * item.price}}</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Store from "../Store/index";

let popupdata = reactive(Store.state.popupdata);

let all = () => {
  console.log(popupdata);
};

let close = () =>{

    Store.state.popup = false

}

let Quantity = ref(0)

// let AddToCart =(item)=>{
//   Store.commit('AddToCart', item)

// }



let increment = () =>{




}

</script>

<style lang="scss" scoped>
</style>
// .popup {
//   width: 50%;
//   height: 300px;
//   position: absolute;
//   border-radius: 12px;
//   background: white;
//   top: 28%;
//   left: 15%;
//   padding: 10px 10px 10px 10px;
//   background: whitesmoke;
//     border: 1px solid #c9c9c9;
//   .loopdata {
//     .images {
//       display: flex;

//       img {
//         width: 150px;
//         height: 150px;
//         border-radius: 12px;
//       }

//       .loopDataDetails {
//         padding: 10px 10px 10px 10px;
//         width: 76%;

//         p {
//           margin-top: 15px;
//           margin-bottom: 15px;
//           font-size: 16;
//           line-height: 1.25rem;
//           font-weight: 200;
//         }

//         span {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;

//           div {
//             width: 22px;
//           cursor: pointer;
//             border: 1px solid red;
//             border-radius: 100px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             height: 22px;
//             color: red;
//           }
//         }
//       }

//       .Quantity-div {
//         display: flex;
//         margin-top: 30px;

//         .Quantity {
//           display: flex;
//           gap: 8px;
//           align-items: center;
//           justify-content: center;
//           margin-left: 20px;

//           div {
//             border: 1px solid red;
//             cursor: pointer;
//             width: 24px;
//             height: 24px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             border-radius: 100px;
//           }
//         }
//       }
//     }
//   }

//   .cart-button {
//     width: 100%;
//     height: 45px;
//     border-radius: 40px;

//     background-color: rgb(235, 52, 158);
//     color: white;
//     font-size: 20px;
//     font-weight: 600;
//     margin-top: 20px;
//   }
// }

