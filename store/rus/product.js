import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'productRus',
  state: () => ({
    data: {
      loading: false,
      error: false,
      product: [],
    }
  }),
  actions: {
    async getProduct(id) {
      try {
        this.data.product = []
        this.data.loading = true;
        if(typeof localStorage !== 'undefined') {
          const basked = JSON.parse(localStorage.getItem('baskedRus'));
          const favorites = JSON.parse(localStorage.getItem('favoritesRus'));
          const response = await axios.get(`https://api.generatorhouse.uz/api/ru/product/${id}`);
          if(response.status == 200) {
            response.data.inCart = basked.some(e => e._id == response.data._id);
            if(response.data.inCart) {
              response.data.count = basked.find(e => e._id == response.data._id).count;
            }
            response.data.inFavorites = favorites.some(e => e._id == response.data._id);
            this.data.product = response.data;
            this.data.loading = false;
          } else {
            this.data.error = true;
          }
        }
      } catch(err) {
        console.log('Error: ', err)
      }
    }
  },
});
