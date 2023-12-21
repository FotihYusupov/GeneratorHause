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
    import axios from 'axios';
    import Card from '~/components/cardComponent.vue'

    const { name } = useRoute().params;

    const data = ref([])
    async function getData () {
        try {
            const res = await axios.get(`https://gh-server-83lb.onrender.com/api/search/${name}`)
            if(res.status === 200) {
                data.value = res.data
            }
        } catch (err) {
            console.log(err)
        }
    }
    getData()
</script>