<template>
    <div class="main">
        <div class="container">
            <div class="hero_swiper">
            <HeroSwiper/>
            </div>
            <h2>Newest products</h2>
            <ul class="cards-list">
                <card v-for="product in productsStore.data.products.reverse().slice(0,8)" 
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
        <div class="list-category-wrapper">
            <div class="container">
                <h2>Best sellers</h2>
                <ul class="cards-list list-category">
                    <card v-for="product in productsStore.data.products.reverse().slice(0,4)" 
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
        </div>
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