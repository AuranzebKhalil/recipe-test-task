import state from "./state"

export default {
  setRecipeApi(state , payload) {

    

    state.filterdata.push(payload)
    state.Apidata.push(payload)
    
  },

  item_detail(state: State, payload: any) {
    state.itemDetail.push(payload)
    console.log(payload)
  },


  popupdata(state: State, payload: any) {
    state.popupdata = []
    state.popupdata.push(payload)
  },


  AddToCart(state: State, product: any) {

    console.log('asdasdasd')
    const existingProduct = state.AddToCart.find((item:any) => item.id === product.id);

  if (existingProduct) {
    existingProduct.Quantity += 1;
  } else {
    state.AddToCart.push(product);
  }
  },

  SearchByname(state:State, payload: any) {

    state.Apidata = []


    let filter = JSON.parse(
      JSON.stringify(
        state.filterdata.filter(
          (item: { name: string }) => item.name === payload
        )
      )
    );

    state.Apidata = filter

        }

  }

