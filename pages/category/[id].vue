<template>
    <div>
      <h1>Products in Category: {{ id }}</h1>
      <p>{{ filteredProducts }}</p>
    </div>
  </template>

<script setup>
    import { useProductsStore } from '~/store/products';

    const { id } = useRoute().params;
    const filteredProducts = ref([])
    const productsStore = useProductsStore();
    const fetchData = async () => {
        await productsStore.getProducts();
        filteredProducts.value = productsStore.data.products.filter(e => e.category === id);
    };
    fetchData()

</script>