import axios from 'axios';
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore({
  id: 'categoriesRus',
  state: () => ({
    data: {
      loading: false,
      error: false,
      categories: [],
    }
  }),
  actions: {
    async getCategories() {
      try {
        this.data.loading = true;
        const response = await axios.get('https://generator2.hypernova.uz/api/ru/categories');
        if(response.status == 200) {
          this.data.categories = response.data;
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
