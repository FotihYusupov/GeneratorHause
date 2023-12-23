<template>
    <h1>Sevimlilar</h1>
    <button @click="removeAllFavorites">Barchasini O'chirish</button>
    <ul class="cards-list">
        <card v-for="product in productsStore.data.products.filter(e => e.inFavorites == true)"
                :id="product._id"
                :title="product.product_title"
                :img="product.product_img"
                :description="product.product_desc"
                :views="product.views"
                :price="product.product_price"
                :inCart="product.inCart"
                :inFavorites="product.inFavorites"
                removeBtn="true"
                @click="click"
            />
        </ul>
</template>

<script setup>
    import card from '~/components/cardComponent.vue'
    import { useProductsStore } from '~/store/products'
    import { useCounterStore } from '~/store/counter'
    const productsStore = useProductsStore()
    const counterStore = useCounterStore()
    
    productsStore.getProducts()
    
    const removeAllFavorites = () => {
        productsStore.data.products = []
        localStorage.setItem('favorites', JSON.stringify([]))
        counterStore.deleteMany('favorites')
    }

    const removeFavorites = (id) => {
        productsStore.data.products = productsStore.data.products.filter(product => product._id !== id);
        localStorage.setItem('favorites', JSON.stringify(productsStore.data.products));

        productsStore.updateProductInFavorites(id, false);

        counterStore.deleteOne('favorites');
    };
    function click (e) {
        if(e.target.id == 'removeBtn') {
            removeFavorites(e.target.closest('.card').id);
        }
    }
</script>