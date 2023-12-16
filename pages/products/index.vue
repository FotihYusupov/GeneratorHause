<template>
    <div>

    </div>
</template>

<script setup>
    import { useProductsStore } from '~/store/products';

    const productsStore = useProductsStore();
    const products = ref([])
    const fetchData = async () => {
        await productsStore.getProducts();
        products.value = productsStore.data
    };
    fetchData()
</script>

<style lang="scss" scoped>
</style>