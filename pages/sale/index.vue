<template>
    <div class="container">
        <h1>Sale Products</h1>
    </div>
</template>

<script setup>
    import { useProductsStore } from '~/store/products'
    const productsStore = useProductsStore();
    productsStore.getProducts()

    const saleProducts = productsStore.data.products.filter(e => e.offer === true)
</script>

<style lang="scss" scoped>

</style>