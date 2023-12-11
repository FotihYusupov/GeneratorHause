<template>
    <div>
        <!-- <p>Categories: {{ categoriesStore.data.data }}</p> -->
        <h2>Products List</h2>
        <div>
            <!-- <NuxtLink to="/basked">Savat</NuxtLink>
                <NuxtLink to="/favorites">Sevimlilar</NuxtLink> -->
            <a href="/basked">Savat</a>
            <br/>
            <a href="/favorites">Sevimlilar</a>
        </div>
        <ul class="products-list">
            <li v-for="product in productsStore.data.data" class="products-list__item" :key="product._id" :id="product._id">
                <img class="products-list__item-img" :src="product.product_img[0]" width="200" height="200"/>
                <h3>{{ product.product_title }}</h3>
                <p>{{ product.product_desc }}</p>
                <p v-if="product.product_price > 0"><b>Price: </b>{{ product.product_price }} so'm</p>
                <button @click="addBasked">Savatcha</button>
                <button @click="addFavorites">Sevimlilar</button>
            </li>
        </ul>
</div>
</template>

<script setup>
    // import { useCategoriesStore } from '~/store/categories';
    import { useProductsStore } from '~/store/products';
    // const categoriesStore = useCategoriesStore();
    // categoriesStore.getCategories()
    const productsStore = useProductsStore();
    productsStore.getProducts()
    const basked = ref(null)
    const favorites = ref(null)
    onMounted(async() => {
        basked.value = await JSON.parse(localStorage.getItem('basked'))
        favorites.value = await JSON.parse(localStorage.getItem('favorites'))
    })
    

    const addBasked = (e) => {
        console.log(basked.value)
        const id = e.target.closest('.products-list__item').id;
        const findProduct = productsStore.data.data.find(e => e._id == id);
        basked.value.push(findProduct);
        localStorage.setItem('basked', JSON.stringify(basked.value))
    }
    
    const addFavorites = (e) => {
        const id = e.target.closest('.products-list__item').id;
        const findProduct = productsStore.data.data.find(e => e._id == id);
        favorites.value.push(findProduct);
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

</script>

<style>
    .products-list {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .products-list__item {
        padding: 8px;
        border-radius: 8px;
        border: 2px solid;
    }

    .products-list__item-img {
        background-color: #c1c1c1;
    }
</style>