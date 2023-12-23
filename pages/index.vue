<template>
    <div class="main">
        <div class="hero_swiper">
            <HeroSwiper/>
        </div>
        <div>
            <h2>Shop by categories</h2>
            <div>

            </div>
        </div>
        <h2>Products List</h2>
        <ul class="cards-list">
            <card v-for="product in productsStore.data.products" 
                :id="product._id"
                v-bind:key="product._id"
                :title="product.product_title"
                :img="product.product_img"
                :description="product.product_desc"
                :views="product.views"
                :price="product.product_price"
                :inCart="product.inCart"
                :inFavorites="product.inFavorites"
            />
        </ul>
</div>
</template>

<script setup>
    import { useCategoriesStore } from '~/store/categories';
    import { useProductsStore } from '~/store/products';

    import card from '../components/cardComponent.vue'

    const categoriesStore = useCategoriesStore();
    categoriesStore.getCategories()
    
    const productsStore = useProductsStore();
    productsStore.getProducts()
</script>

<style>
</style>