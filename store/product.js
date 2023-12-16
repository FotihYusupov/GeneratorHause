import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductStore = defineStore({
  id: 'product',
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
        this.data.loading = true;
        const response = await axios.get(`https://gh-server.vercel.app/api/product/${id}`);
        if(response.status == 200) {
          this.data.product = response.data;
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
