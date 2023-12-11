<template>
    <h1>Sevimlilar</h1>
    <ul class="products-list">
            <li v-for="product in favorites" class="products-list__item" :key="product._id" :id="product._id">
                <img class="products-list__item-img" :src="product.product_img[0]" width="200" height="200"/>
                <h3>{{ product.product_title }}</h3>
                <p>{{ product.product_desc }}</p>
                <p v-if="product.product_price > 0"><b>Price: </b>{{ product.product_price }} so'm</p>
            </li>
        </ul>
</template>

<script setup>
    const favorites = ref(null)
    onMounted(async() => {
        favorites.value = await JSON.parse(localStorage.getItem('favorites'))
    })
</script>