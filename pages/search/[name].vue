<template>
    <ul class="cards-list">
        <card v-for="product in data" 
            :key="product._id"
            :id="product._id"
            :title="product.product_title"
            :img="product.product_img[0]"
            :description="product.product_desc"
            :views="product.views"
            :price="product.product_price"
            :inCart="product.inCart"
            :inFavorites="product.inFavorites"
        />
    </ul>
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