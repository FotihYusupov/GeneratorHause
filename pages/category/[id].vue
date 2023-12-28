<template>
    <div class="container category_wrapper">
      <div class="filter">
        <div class="custom-select" id="customSelect">
          <span @click="openSelect" class="custom-select__title-wrapper">
            <p class="custom-select__title">Select Brand</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_775_9145)">
                <path d="M13.8136 3.36819C13.5651 3.11971 13.1622 3.11967 12.9137 3.36824L7.00015 9.28188L1.08634 3.36819C0.837858 3.11971 0.434912 3.11967 0.186391 3.36824C-0.0621303 3.61676 -0.0621303 4.01966 0.186391 4.26818L6.5502 10.6318C6.66954 10.7512 6.83138 10.8182 7.00015 10.8182C7.16891 10.8182 7.3308 10.7511 7.4501 10.6318L13.8136 4.26814C14.0621 4.01966 14.0621 3.61671 13.8136 3.36819Z" fill="#AFB0B4"/>
              </g>
              <defs>
                <clipPath id="clip0_775_9145">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </span>
          <div class="custom__selected-wrapper">
            <p @click="removeSelected" class="custom__selected-brands" v-for="selected in selectedBrands" :id="selected._id">{{ selected.brand_name }}</p>
          </div>
          <div class="custom-select__list">
            <button @click="getBrand" class="custom-select__item" v-for="brand in brands" :id="brand._id" :disabled="brand.selected">{{ brand.brand_name }}</button>
          </div>
        </div>
        <div class="price-input__title">
          <h4>Price</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <g clip-path="url(#clip0_775_9145)">
              <path d="M13.8136 3.36819C13.5651 3.11971 13.1622 3.11967 12.9137 3.36824L7.00015 9.28188L1.08634 3.36819C0.837858 3.11971 0.434912 3.11967 0.186391 3.36824C-0.0621303 3.61676 -0.0621303 4.01966 0.186391 4.26818L6.5502 10.6318C6.66954 10.7512 6.83138 10.8182 7.00015 10.8182C7.16891 10.8182 7.3308 10.7511 7.4501 10.6318L13.8136 4.26814C14.0621 4.01966 14.0621 3.61671 13.8136 3.36819Z" fill="#AFB0B4"/>
            </g>
            <defs>
              <clipPath id="clip0_775_9145">
                <rect width="14" height="14" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <hr>
        <div class="price-inputs">
          <input type="text" @input="filterByPrice" id="startPrice" placeholder="to">
          <input type="text" @input="filterByPrice" id="endPrice" placeholder="from">
        </div>
      </div>
      <div class="categories-wrapper">
        <div v-if="filteredProducts.length > 0" class="categories-header">
          <span class="categories__title-wrapper">
            <h2>{{ filteredProducts[0].category.category_name }}</h2>
            <p>{{ filteredProducts.length }} items</p>
          </span>
          <span class="sort-wrapper">
            <p>Sort by</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_684_17814)">
                <path d="M13.8136 3.36819C13.5651 3.11971 13.1622 3.11967 12.9137 3.36824L7.00015 9.28188L1.08634 3.36819C0.837858 3.11971 0.434912 3.11967 0.186391 3.36824C-0.0621303 3.61676 -0.0621303 4.01966 0.186391 4.26818L6.5502 10.6318C6.66954 10.7512 6.83138 10.8182 7.00015 10.8182C7.16891 10.8182 7.3308 10.7511 7.4501 10.6318L13.8136 4.26814C14.0621 4.01966 14.0621 3.61671 13.8136 3.36819Z" fill="#AFB0B4"/>
              </g>
              <defs>
                <clipPath id="clip0_684_17814">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <ul class="category-products">
          <card v-for="product in filteredProducts.slice(0,end)" :id="product._id"
              v-bind:key="product._id" :title="product.product_title" :img="product.product_img"
              :description="product.product_desc" :views="product.views" :price="product.product_price"
              :newPrice="product.new_price"
              :inCart="product.inCart" :inFavorites="product.inFavorites" />
        </ul>
        <button class="show-btn" :disabled="filteredProducts.length <= end" @click="clickFn">View more</button>
      </div>
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

    const openSelect = () => {
      customSelect.classList.toggle('custom-select--open')
    }

    const selectedBrands = ref([])

    const getBrand = (event) => {
      customSelect.classList.remove('custom-select--open')
      brands.value.forEach(element => {
        if(element._id == event.target.id) {
          element.selected = true
        }
      })
      selectedBrands.value.push(brands.value.filter(e => e._id === event.target.id)[0])
      const filtered = []
      productsStore.data.products.filter(e => e.category._id === id).forEach(product => {
        selectedBrands.value.forEach(brand => {
          if(product.brand._id === brand._id) {
            console.log(product.brand._id == brand._id);
            filtered.push(product)
          }
        })
      })
      filteredProducts.value = filtered
    }

    const removeSelected = (e) => {
      selectedBrands.value = selectedBrands.value.filter(element => element._id !== e.target.id)
      brands.value.forEach(element => {
        if(element._id == e.target.id) {
          element.selected = false
        }
      })
      let filtered = []
      productsStore.data.products.filter(e => e.category._id === id).forEach(product => {
        if(selectedBrands.value.length === 0) {
          filtered = productsStore.data.products.filter(e => e.category._id === id)
          console.log(filtered);
        }
        selectedBrands.value.forEach(brand => {
          if(product.brand._id === brand._id) {
            filtered.push(product)
          }
        })
      })
      filteredProducts.value = filtered
    }

    const filterByPrice = () => {
      filteredProducts.value = productsStore.data.products.filter(e => e.category._id === id).filter(product => {
        if (startPrice.value !== '' && endPrice.value !== '') {
          return product.product_price >= startPrice.value && product.product_price <= endPrice.value;
        } else if (startPrice.value !== '') {
          return product.product_price >= startPrice.value;
        } else if (endPrice.value !== '') {
          return product.product_price <= endPrice.value;
        }
        return [];
      });
    }

</script>