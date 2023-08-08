import { Commit } from "vuex";
import axios from 'axios';

export default {
  recipeData: async ({ commit }: { commit: Commit }) => {
    try {
      const response = await axios.get('https://recipesapi.kutaybekleric.com/recipes');
 function getRandomPrice() {
  return Math.floor(Math.random() * 90 + 10).toFixed(2);
}

  
      response.data.forEach((recipe:any) => {
        const recipeWithRandomPrice = {
          ...recipe,
          price: getRandomPrice(),
          Quantity: 1,
        };
      
        commit('setRecipeApi' ,recipeWithRandomPrice )

      });
  
     
    } catch (error) {
      console.error(error);
    }
}


}
