<template>
    <div class="container">
        <h1>Sale Products</h1>
        <ul class="cards-list list-category">
                <card v-for="product in productsStore.data.products.filter(e => e.offer === true)" 
                    :id="product._id"
                    v-bind:key="product._id"
                    :title="product.product_title"
                    :img="product.product_img"
                    :description="product.product_desc"
                    :views="product.views"
                    :price="product.product_price"
                    :newPrice="product.new_price"
                    :inCart="product.inCart"
                    :inFavorites="product.inFavorites"
                />
            </ul>
    </div>
</template>

<script setup>
    import { useProductsStore } from '~/store/products'
    import card from '~/components/cardComponent.vue'

    const productsStore = useProductsStore();
    productsStore.getProducts()

    productsStore.data.products.filter(e => e.offer === true)
</script>

<style lang="scss" scoped>

</style>