<template>
    <div class="container">
        <Loader v-if="productsStore.data.loading"/>
        <div v-else>
            <h1>Search</h1>
            <ul class="cards-list">
                <card v-for="product in data" :id="product._id"
                    v-bind:key="product._id" :title="product.product_title" :img="product.product_img"
                    :description="product.product_desc" :views="product.views" :price="product.product_price"
                    :inCart="product.inCart" :inFavorites="product.inFavorites" />
            </ul>
        </div>
    </div>
</template>

<script setup>
    import Card from '~/components/rus/cardComponent.vue'

    import { useProductsStore } from '~/store/rus/products';
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