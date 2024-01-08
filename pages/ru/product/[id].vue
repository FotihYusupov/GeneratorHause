<template>
    <Loader v-if="product.data.loading"/>
    <div v-else class="container">
        <div v-if="findProduct.product_title" class="product">
            <div v-if="findProduct.product_img" class="images-wrapper">
                <div class="images-list">
                    <img @click="getImg" class="list-item__img" v-for="(img, index) in findProduct.product_img" v-bind:key="img" :src="img" alt="Product Img" :id="index">
                </div>    
                <img class='hero-img' :src="findProduct.product_img[index]" alt="">
                <button @click="beforeImg" class="img-pagination-btn-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <g clip-path="url(#clip0_844_136)">
                            <path
                                d="M24 48C37.234 48 48 37.234 48 24C48 10.766 37.234 0 24 0C10.766 0 0 10.766 0 24C0 37.234 10.766 48 24 48ZM16.586 22.586L26.586 12.586C26.976 12.196 27.488 12 28 12C28.512 12 29.0241 12.196 29.4141 12.586C30.196 13.368 30.196 14.632 29.4141 15.414L20.828 24L29.414 32.586C30.1959 33.368 30.1959 34.632 29.414 35.414C28.632 36.1959 27.368 36.1959 26.586 35.414L16.586 25.4139C15.804 24.632 15.804 23.368 16.586 22.586Z"
                                fill="#7e7e7eab" />
                        </g>
                        <defs>
                            <clipPath id="clip0_844_136">
                                <rect width="48" height="48" fill="white" transform="matrix(-1 0 0 -1 48 48)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button @click="afterImg" class="img-pagination-btn-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <g clip-path="url(#clip0_844_140)">
                            <path
                                d="M24 0C10.766 0 0 10.766 0 24C0 37.234 10.766 48 24 48C37.234 48 48 37.234 48 24C48 10.766 37.234 0 24 0ZM31.414 25.414L21.414 35.414C21.024 35.804 20.512 36 20 36C19.488 36 18.9759 35.804 18.5859 35.414C17.804 34.632 17.804 33.368 18.5859 32.586L27.172 24L18.586 15.414C17.8041 14.632 17.8041 13.368 18.586 12.586C19.368 11.8041 20.632 11.8041 21.414 12.586L31.414 22.5861C32.196 23.368 32.196 24.632 31.414 25.414Z"
                                fill="#7e7e7eab" />
                        </g>
                        <defs>
                            <clipPath id="clip0_844_140">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <div class="product-content">
                <div class="product__header">
                    <div class="product__title-wrapper">
                        <p>{{ findProduct.category.category_name }}</p>
                        <h3>{{ findProduct.product_title }}</h3>
                    </div>
                    <span @click="favorites" v-if="!findProduct.inFavorites" id="addFavorites"
                        class="product__favorites-wrapper">
                        <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 20 20" fill="none">
                            <path
                                d="M10.516 17.3417C10.2327 17.4417 9.76602 17.4417 9.48268 17.3417C7.06602 16.5167 1.66602 13.075 1.66602 7.24168C1.66602 4.66668 3.74102 2.58334 6.29935 2.58334C7.81602 2.58334 9.15768 3.31668 9.99935 4.45001C10.841 3.31668 12.191 2.58334 13.6993 2.58334C16.2577 2.58334 18.3327 4.66668 18.3327 7.24168C18.3327 13.075 12.9327 16.5167 10.516 17.3417Z"
                                stroke="#000814" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="pointer-events">Sevimlilar</p>
                    </span>
                    <span @click="favorites" v-else class="product__favorites-wrapper" id="removeFavorites">
                        <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                            viewBox="0 0 20 21" fill="none">
                            <path
                                d="M10.516 17.8417C10.2327 17.9417 9.76602 17.9417 9.48268 17.8417C7.06602 17.0167 1.66602 13.575 1.66602 7.74168C1.66602 5.16668 3.74102 3.08334 6.29935 3.08334C7.81602 3.08334 9.15768 3.81668 9.99935 4.95001C10.841 3.81668 12.191 3.08334 13.6994 3.08334C16.2577 3.08334 18.3327 5.16668 18.3327 7.74168C18.3327 13.575 12.9327 17.0167 10.516 17.8417Z"
                                fill="#FFD60A" stroke="#FFD60A" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <p class="pointer-events">Sevimlilar</p>
                    </span>
                </div>
                <p><b>Brand:</b>
                    <br>
                    {{ findProduct.brand.brand_name }}
                </p>
                <div class="product__counter-wrapper">
                    <p>Soni:</p>
                    <span class="product__counter-btns">
                        <button @click="count" class="product__counter-btn" id="removeCount">
                            <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                viewBox="0 0 20 21" fill="none">
                                <path
                                    d="M19.2188 9.71875H0.78125C0.349766 9.71875 0 10.0685 0 10.5C0 10.9315 0.349766 11.2812 0.78125 11.2812H19.2188C19.6502 11.2812 20 10.9315 20 10.5C20 10.0685 19.6502 9.71875 19.2188 9.71875Z"
                                    fill="#000814" />
                            </svg>
                        </button>
                        <p>{{ findProduct.count || 1 }}</p>
                        <button @click="count" class="product__counter-btn" id="addCount">
                            <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="20" height="21"
                                viewBox="0 0 20 21" fill="none">
                                <g clip-path="url(#clip0_391_10561)">
                                    <path
                                        d="M19.2188 9.71875H10.7812V1.28125C10.7812 0.849766 10.4315 0.5 10 0.5C9.56852 0.5 9.21875 0.849766 9.21875 1.28125V9.71875H0.78125C0.349766 9.71875 0 10.0685 0 10.5C0 10.9315 0.349766 11.2812 0.78125 11.2812H9.21875V19.7188C9.21875 20.1502 9.56852 20.5 10 20.5C10.4315 20.5 10.7812 20.1502 10.7812 19.7188V11.2812H19.2188C19.6502 11.2812 20 10.9315 20 10.5C20 10.0685 19.6502 9.71875 19.2188 9.71875Z"
                                        fill="#000814" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_391_10561">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </span>
                </div>
                <h5 class="product__price-title">Price:</h5>
                <span v-if="findProduct.new_price" class="product__price-wrapper">
                    <p>{{ findProduct.new_price * (findProduct.count || 1) }} So'm</p>
                    <p v-if="findProduct.product_price">{{ findProduct.product_price }} So'm</p>
                </span>
                <p class="product__price" v-if="!findProduct.new_price">{{ findProduct.product_price * (findProduct.count ||
                    1) }} So'm</p>
                <span class="product__basked-wrapper">
                    <button @click="addBasked" :disabled="findProduct.inCart">Savatga qo'shish</button>
                    <button @click="buyNow">Sotib olish</button>
                </span>
            </div>
        </div>
        <div class="product-details">
            <h3>Mahsulot ma'lumotlari</h3>
            <div class="product-details__wrapper">
                <span v-bind:key="information" v-for="information in findProduct.information">
                    <p>{{ information.key }}</p>
                    <hr>
                    <p>{{ information.value }}</p>
                </span>
            </div>
        </div>
        <h2 class="product-footer-title">O'xshash mahsulotlar</h2>
        <ul class="cards-list list-category">
            <card v-for="product in products.slice(0, 8)" :id="product._id" v-bind:key="product._id"
                :title="product.product_title" :img="product.product_img" :description="product.product_desc"
                :views="product.views" :price="product.product_price" :inCart="product.inCart"
                :inFavorites="product.inFavorites" />
        </ul>
    </div>
</template>

<script setup>
import { useProductStore } from '~/store/rus/product';
import { useProductsStore } from '~/store/rus/products';
import { useCounterStore } from '~/store/rus/counter';
import card from '~/components/rus/cardComponent.vue';

const counterStore = useCounterStore()

import addFavorites from '~/utils/favorites';

const productsStore = useProductsStore()


const { id } = useRoute().params;
const product = useProductStore()

const products = ref([])

const findProduct = ref([])
const index = ref(0)

const getProduct = async () => {
    await product.getProduct(id)
    await productsStore.getProducts()
    findProduct.value = product.data.product;
    products.value = productsStore.data.products
}
getProduct()

const favorites = (e) => {
    const id = e.target.id
    if (id === 'addFavorites') {
        addFavorites(findProduct.value._id)
        findProduct.value.inFavorites = true
    }
    if (id === 'removeFavorites') {
        let favoritesProducts = JSON.parse(localStorage.getItem('favoritesRus'))
        favoritesProducts = favoritesProducts.filter(product => product._id !== findProduct.value._id);
        localStorage.setItem('favoritesRus', JSON.stringify(favoritesProducts));

        productsStore.updateProductInFavorites(findProduct.value._id, false);

        counterStore.deleteOne('favorites');
        findProduct.value.inFavorites = false
    }
}

const getImg = (e) => {
    index.value = e.target.id
}

const afterImg = () => {
    if (index.value < findProduct.value.product_img.length - 1) {
        index.value = parseInt(index.value) + 1
    }
}

const beforeImg = () => {
    if (index.value > 0) {
        index.value = parseInt(index.value) - 1
    }
}

const count = (e) => {
    const target = e.target
    const basked = JSON.parse(localStorage.getItem('baskedRus')) || [];
    if (target.id === 'addCount') {
        if (findProduct.value.count) {
            if (basked.some(product => product._id == id)) {
                basked.forEach(product => {
                    if (product._id == id) {
                        product.count += 1
                    }
                })
                localStorage.setItem('basked', JSON.stringify(basked));
            }
            findProduct.value.count += 1
        } else {
            findProduct.value.count = 2
            if (basked.some(product => product._id == id)) {
                basked.forEach(product => {
                    if (product._id == id) {
                        product.count = 2
                    }
                })
                localStorage.setItem('basked', JSON.stringify(basked));
            }
        }
    } else if (target.id === 'removeCount') {
        if (findProduct.value.count) {
            if (basked.some(product => product._id == id)) {
                basked.forEach(product => {
                    if (product._id == id) {
                        product.count -= 1
                    }
                })
                localStorage.setItem('basked', JSON.stringify(basked));
            }
            findProduct.value.count -= 1
        } else {
            findProduct.value.count = 1
            if (basked.some(product => product._id == id)) {
                basked.forEach(product => {
                    if (product._id == id) {
                        product.count = 1
                    }
                })
                localStorage.setItem('basked', JSON.stringify(basked));
            }
        }
    }
}

const addBasked = () => {
    const basked = JSON.parse(localStorage.getItem('baskedRus')) || [];
    findProduct.value.inCart = true
    if (!findProduct.value.count) {
        findProduct.value.count = 1
    }
    basked.push(findProduct.value);
    localStorage.setItem('baskedRus', JSON.stringify(basked));
    counterStore.addBasked();
    productsStore.updateProductIBasked(id, true);
}

const buyNow = async () => {
    const basked = JSON.parse(localStorage.getItem('baskedRus')) || [];
    if (!basked.some(product => product._id == id)) {
        addBasked()
        await navigateTo('/ru/basked')
    } else {
        await navigateTo('/ru/basked')
    }
}
</script>
