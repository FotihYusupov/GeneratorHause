<template>
    <div class="container">
      <div class="filter">
        <select>
          <option v-for="brand in brands" :value="brand._id">{{ brand.brand_name }}</option>
        </select>
        <div class="filter__fuel-wrapper">
          <input type="text">
        </div>
      </div>
      <ul class="cards-list list-category">
        <card v-for="product in filteredProducts" :id="product._id"
            v-bind:key="product._id" :title="product.product_title" :img="product.product_img"
            :description="product.product_desc" :views="product.views" :price="product.product_price"
            :inCart="product.inCart" :inFavorites="product.inFavorites" />
      </ul>
    </div>
  </template>

<script setup>
    import axios from 'axios'

    import { useProductsStore } from '~/store/products';
    import card from '~/components/cardComponent.vue'

    const brands = ref([])
    const getBrands = async () => {
      const res = await axios.get('https://gh-server-83lb.onrender.com/api/brands')
      brands.value = res.data
    }
    getBrands()

    const { id } = useRoute().params;
    const filteredProducts = ref([])
    const productsStore = useProductsStore();
    const fetchData = async () => {
        await productsStore.getProducts();
        filteredProducts.value = productsStore.data.products.filter(e => e.category._id === id);
    };
    fetchData()

</script>