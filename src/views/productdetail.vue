<template>
  <div class="item-container">

    <div class="shopping" v-if="itemDetail.length === 0">
        <img src="../assets/warning.png" alt="">
      
      <p @click="alls">Attention! record not found</p>  
    </div>


    <div class="Itemdetail" v-if="currentItem">
      <img  @click="popupDatas(currentItem)" :src="currentItem.image" alt="" />

      <div class="product-detaile">
        <h3>{{ currentItem.name }}</h3>
        <h4>${{ currentItem.price }} dasd</h4>
      
      </div>
    </div>
  </div>

  <div class="item-footer">
    <button
      class="Previous"
      @click="showPreviousItem"
      :disabled="currentIndex === 0"
    >
      Previous
    </button>
    <v-spacer></v-spacer>
    <button
      class="Next"
      @click="showNextItem"
      :disabled="currentIndex === itemDetail.length - 1"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Store from "../Store/index";

let alls = () =>{

console.log(Store.state.itemDetail)

}

const itemDetail = computed(() => {
  return Store.state.itemDetail
});


const currentIndex = ref(0);

const currentItem = computed(() => {
  return itemDetail.value[currentIndex.value];
});

const showNextItem = () => {
  if (currentIndex.value < itemDetail.value.length - 1) {
    currentIndex.value++;
  }
};

let popupDatas = (item) => {

  Store.commit('AddToCart', item)
};

const showPreviousItem = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style lang="scss" scoped>

.shopping{

    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    color: rgba(170, 166, 166, 0.952);
    margin-top: 60px;

}
.item-container {
  display: flex;
  height: 739px;
  flex-direction: column;
  justify-content: space-between;
}
.Itemdetail {
  width: 206px;


  margin-top: 20px;

  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #cdcdcd;
  margin-left: 10px;

  img {
    width: 204px;
    height: 160px;
    border-radius:9px ;
  }

  h3 {
    width: fit-content;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  .product-detaile {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;

 

    p {
      width: 100%;
      height: 52px;
      // font-size: 16px;
      line-height: 1;
      overflow: hidden;
      // margin-bottom: 0.75rem;
      text-overflow: ellipsis;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }


}

.item-footer {
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
}

.Previous {
  width: 30%;
  height: 40px;
  border-radius: 10px;
  background-color: rgb(150, 150, 196);
  color: white;
}

.Next {
  width: 30%;
  height: 40px;
  border-radius: 10px;
  background-color: rgb(248, 73, 73);
  color: white;
}
</style>
