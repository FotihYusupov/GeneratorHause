<template>
    <div class="main">
        <div class="container">
            <div class="hero_swiper">
            <HeroSwiper/>
            </div>
            <div class="title-wrapper">
                <h2>Newest Products</h2>
                <span class="title-wrapper__line"></span>
            </div>
            <ul class="cards-list list-category">
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
        <div class="container title-wrapper">
            <h2>Best sellers</h2>
            <span class="title-wrapper__line"></span>
        </div>
        <div class="list-category-wrapper">
            <div class="container">
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
        <div class="container title-wrapper">
            <h2>Gasoline generatorlar</h2>
            <span class="title-wrapper__line"></span>
            <NuxtLink class="SeeAll" to="category/657af00c7633bfd3cdb0276b">See all</NuxtLink>
        </div>
        <div class="list-category-wrapper">
            <div class="container">
                <ul class="cards-list list-category">
                    <card v-for="product in productsStore.data.products.filter(e => e.category._id == '657af00c7633bfd3cdb0276b')" 
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
        <div class="container title-wrapper">
            <h2>Invertor Generator</h2>
            <span class="title-wrapper__line"></span>
            <NuxtLink class="SeeAll" to="category/657af00c7633bfd3cdb0276b">See all</NuxtLink>
        </div>
        <div class="list-category-wrapper">
            <div class="container">
                <ul class="cards-list list-category">
                    <card v-for="product in productsStore.data.products.filter(e => e.category._id == '657aefcd7633bfd3cdb02768')" 
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
        <div class="container title-wrapper">
            <h2>Karcher stabilizator</h2>
            <span class="title-wrapper__line"></span>
            <NuxtLink class="SeeAll" to="category/657aef6f7633bfd3cdb02765">See all</NuxtLink>
        </div>
        <div class="list-category-wrapper">
            <div class="container">
                <ul class="cards-list list-category">
                    <card v-for="product in productsStore.data.products.filter(e => e.category._id == '657aef6f7633bfd3cdb02765')" 
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
        <div class="container title-wrapper">
            <h2>Motokultivator</h2>
            <span class="title-wrapper__line"></span>
            <NuxtLink class="SeeAll" to="category/657aef9a7633bfd3cdb02766">See all</NuxtLink>
        </div>
        <div class="list-category-wrapper">
            <div class="container">
                <ul class="cards-list list-category">
                    <card v-for="product in productsStore.data.products.filter(e => e.category._id == '657aef9a7633bfd3cdb02766')" 
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
        <div class="container title-wrapper">
            <h2>Betona meshalka</h2>
            <span class="title-wrapper__line"></span>
            <NuxtLink class="SeeAll" to="category/657aefb47633bfd3cdb02767">See all</NuxtLink>
        </div>
        <div class="list-category-wrapper">
            <div class="container">
                <ul class="cards-list list-category">
                    <card v-for="product in productsStore.data.products.filter(e => e.category._id == '657aefb47633bfd3cdb02767')" 
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
        <div class="container title-wrapper">
            <h2>Benzinli generator</h2>
            <span class="title-wrapper__line"></span>
            <NuxtLink class="SeeAll" to="category/657aefe47633bfd3cdb02769">See all</NuxtLink>
        </div>
        <div class="list-category-wrapper">
            <div class="container">
                <ul class="cards-list list-category">
                    <card v-for="product in productsStore.data.products.filter(e => e.category._id == '657aefe47633bfd3cdb02769')" 
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
        <div class="container title-wrapper">
            <h2>Dizelni generator</h2>
            <span class="title-wrapper__line"></span>
            <NuxtLink class="SeeAll" to="category/657aeff97633bfd3cdb0276a">See all</NuxtLink>
        </div>
        <div class="list-category-wrapper">
            <div class="container">
                <ul class="cards-list list-category">
                    <card v-for="product in productsStore.data.products.filter(e => e.category._id == '657aeff97633bfd3cdb0276a')" 
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