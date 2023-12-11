import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    data: {
      loading: false,
      error: false,
      data: [],
    }
  }),
  actions: {
    async getProducts() {
      try {
        this.data.loading = true;
        const response = await axios.get('https://gh-admin.onrender.com/api/products');
        if(response.status == 200) {
          this.data.data = response.data;
          this.data.loading = false;
        } else {
          this.data.error = true;
        }
      } catch(err) {
        console.log('Error: ', err)
      }
    }
  },
});
