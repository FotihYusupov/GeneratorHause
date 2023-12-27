<template>
    <div class="container">
      <!-- <div class="filter">
        <select>
          <option v-for="brand in brands" :value="brand._id">{{ brand.brand_name }}</option>
        </select>
        <div class="filter__fuel-wrapper">
          <input type="text">
        </div>
      </div> -->
      <!-- <div v-if="filteredProducts[0]" class="categories-header">
        <span>
          <h2>{{ filteredProducts[0].category.category_name }}</h2>
          <p>{{ filteredProducts.length }} items</p>
        </span>
        <span>
          <p>sort by</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
            <g clip-path="url(#clip0_523_13125)">
              <path d="M13.8136 3.86819C13.5651 3.61971 13.1622 3.61967 12.9137 3.86824L7.00015 9.78188L1.08634 3.86819C0.837858 3.61971 0.434912 3.61967 0.186391 3.86824C-0.0621303 4.11676 -0.0621303 4.51966 0.186391 4.76818L6.5502 11.1318C6.66954 11.2512 6.83138 11.3182 7.00015 11.3182C7.16891 11.3182 7.3308 11.2511 7.4501 11.1318L13.8136 4.76814C14.0621 4.51966 14.0621 4.11671 13.8136 3.86819Z" fill="#AFB0B4"/>
            </g>
            <defs>
              <clipPath id="clip0_523_13125">
                <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
        </svg>
        </span>
      </div> -->
      <ul class="categories-list">
        <card v-for="product in filteredProducts.slice(0,end)" :id="product._id"
            v-bind:key="product._id" :title="product.product_title" :img="product.product_img"
            :description="product.product_desc" :views="product.views" :price="product.product_price"
            :newPrice="product.new_price"
            :inCart="product.inCart" :inFavorites="product.inFavorites" />
      </ul>
      <button class="show-btn" :disabled="filteredProducts.length <= end" @click="clickFn">Show more</button>
      <p></p>
    </div>
  </template>

<script setup>
    import axios from 'axios'

    import { useProductsStore } from '~/store/products';
    import card from '~/components/cardComponent.vue'

    const end = ref(20)

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
    
    const clickFn = () => {
      end.value = end.value + 20
    }

</script>