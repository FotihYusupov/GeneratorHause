<template>
    <h1>Sevimlilar</h1>
    <button @click="removeAllFavorites">Barchasini O'chirish</button>
    <ul class="products-list">
        <card v-for="product in data" 
                :id="product._id"
                :title="product.product_title"
                :img="product.product_img[0]"
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
    
    const data = ref([])
    onMounted(() => {
        data.value = JSON.parse(localStorage.getItem('favorites'))
    })

    const removeAllFavorites = () => {
        localStorage.setItem('favorites', JSON.stringify([]))
        data.value = []
        counterStore.deleteMany('favorites')
    }

    const removeFavorites = (id) => {
        data.value = data.value.filter(product => product._id !== id);
        localStorage.setItem('favorites', JSON.stringify(data.value));

        productsStore.updateProductInFavorites(id, false);

        counterStore.deleteOne('favorites');
    };
    function click (e) {
        if(e.target.id == 'removeBtn') {
            removeFavorites(e.target.closest('.card').id);
        }
    }
</script>