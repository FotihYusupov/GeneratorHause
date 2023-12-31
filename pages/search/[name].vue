<template>
    <div class="container">
        <h1>Search</h1>
        <ul class="cards-list">
            <card v-for="product in data" :id="product._id"
                v-bind:key="product._id" :title="product.product_title" :img="product.product_img"
                :description="product.product_desc" :views="product.views" :price="product.product_price"
                :inCart="product.inCart" :inFavorites="product.inFavorites" />
        </ul>
    </div>
</template>

<script setup>
    import Card from '~/components/cardComponent.vue'

    import { useProductsStore } from '~/store/products';
    const productsStore = useProductsStore();

    const { name } = useRoute().params;

    const data = ref([])
    const filteredData = async () => {
        await productsStore.getProducts()
        const filteredProducts = productsStore.data.products.filter(product => {
            return product.product_title.toLowerCase().includes(name.toLowerCase());
        });
        data.value = filteredProducts;
    };
    filteredData();
</script>