<template>
    <h1>Savat</h1>
    <ul class="products-list">
            <li v-for="product in basked" class="products-list__item" :key="product._id" :id="product._id">
                <img class="products-list__item-img" :src="product.product_img[0]" width="200" height="200"/>
                <h3>{{ product.product_title }}</h3>
                <p>{{ product.product_desc }}</p>
                <p v-if="product.product_price > 0"><b>Price: </b>{{ product.product_price }} so'm</p>
                <button @click="addBasked">Savatcha</button>
                <button @click="addFavorites">Sevimlilar</button>
            </li>
        </ul>
</template>

<script setup>
    const basked = ref(null)
    onMounted(async() => {
        basked.value = await JSON.parse(localStorage.getItem('basked'))
    })
</script>