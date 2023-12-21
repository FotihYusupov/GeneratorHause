import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    data: {
      loading: false,
      error: false,
      products: [],
    }
  }),
  actions: {
    async getProducts() {
      try {
        this.data.loading = true;
        const response = await axios.get('https://gh-server-83lb.onrender.com/api/products');
        if(response.status == 200) {
          if (typeof localStorage !== 'undefined') {
            const basked = JSON.parse(localStorage.getItem('basked'))
            const favorites = JSON.parse(localStorage.getItem('favorites'))
            response.data.forEach((product) => {
                product.inCart = basked.some((item) => item._id === product._id);
                product.inFavorites = favorites.some((item) => item._id === product._id);
            });
            this.data.products = response.data;
            this.data.loading = false;
          }
        } else {
          this.data.error = true;
        }
      } catch(err) {
        console.log('Error: ', err)
      }
    }
  },
});
