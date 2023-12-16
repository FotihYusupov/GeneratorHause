<template>
    <div>
        <!-- <p>Categories: {{ categoriesStore.data.data }}</p> -->
        <h2>Products List</h2>
        <div>
            <NuxtLink to="/basked">Savat</NuxtLink>
            <br/>
            <NuxtLink to="/favorites">Sevimlilar</NuxtLink>
        </div>
        <ul class="products-list">
            <li v-for="product in productsStore.data.products" class="products-list__item" :key="product._id" :id="product._id">
                <img class="products-list__item-img" :src="product.product_img[0]" width="200" height="200"/>
                <h3>{{ product.product_title }}</h3>
                <p>{{ product.product_desc }}</p>
                <p v-if="product.product_price > 0"><b>Price: </b>{{ product.product_price }} so'm</p>
                <button @click="(e) => addBasked(e.target.closest('.products-list__item').id)">Savatcha</button>
                <button @click="(e) => addFavorites(e.target.closest('.products-list__item').id)">Sevimlilar</button>
            </li>
        </ul>
</div>
</template>

<script setup>
    import { useCategoriesStore } from '~/store/categories';
    import { useProductsStore } from '~/store/products';
    
    import addBasked from '~/utils/backed';
    import addFavorites from '~/utils/favorites'

    const categoriesStore = useCategoriesStore();
    categoriesStore.getCategories()
    
    const productsStore = useProductsStore();
    productsStore.getProducts()

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