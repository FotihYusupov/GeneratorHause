<template>
    <h1>Savat</h1>
    <button @click="removeAllBasked">Barchasini O'chirish</button>
    <ul class="products-list">
            <li v-for="product in basked" class="products-list__item" :key="product._id" :id="product._id">
                <img class="products-list__item-img" :src="product.product_img[0]" width="200" height="200"/>
                <h3>{{ product.product_title }}</h3>
                <p>{{ product.product_desc }}</p>
                <p v-if="product.product_price > 0"><b>Price: </b>{{ product.product_price }} so'm</p>
                <button @click="removeBasked">Ochirish</button>
            </li>
        </ul>
</template>

<script setup>
    const basked = ref(null)
    onMounted(async() => {
        basked.value = await JSON.parse(localStorage.getItem('basked'))
    })

    const removeBasked = (e) => {
        const id = e.target.closest('.products-list__item').id;
        basked.value = basked.value.filter(e => e._id !== id)
        localStorage.setItem('basked', JSON.stringify(basked.value))
    }

    const removeAllBasked = () => {
        localStorage.setItem('basked', JSON.stringify([]))
        basked.value = []
    }
</script>