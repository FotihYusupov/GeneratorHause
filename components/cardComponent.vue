<template>
    <li class="card" :id="id" :key="id">
        <Carousel class="card-carousel" v-bind:key="id">
            <Slide class="custom-slide" v-for="slide in img" :key="slide">
                <div class="carousel__item">
                    <img :src="slide" alt="product img">
                </div>
            </Slide>

            <template #addons>
                <div class="carousel_pagination">
                    <Pagination class="custom-pagination" />
                </div>

            </template>
        </Carousel>

        <div class="card__content-wrapper">

            <NuxtLink class="link" :to="'/product/' + id">
                <h3 class="card__title">{{ title }}</h3>
            </NuxtLink>
            <p class="card__desc ellipsis">{{ brand }}</p>
            <p class="card__views">Korganlar {{ views }}</p>
            <div class="card_footer">
                <p v-if="!newPrice" class="card__price">{{ price }} So'm</p>
                <div v-if="newPrice" class="card__newPrice-wrapper">
                    <p>{{ newPrice }} So'm</p>
                    <p>{{ price }} So'm</p>
                </div>
                <button @click="e => addBasked(e.target.closest('.card').id)" class="card__basked-btn" id="addBaskedBtn"
                    :disabled="inCart">
                    <p>Add to card</p>
                    <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20" fill="none">
                        <g id="Icons">
                            <g id="Group">
                                <path id="Vector"
                                    d="M4.46512 6.44185C4.34952 6.44185 4.25581 6.53556 4.25581 6.65115V17.5349C4.25581 17.6505 4.34952 17.7442 4.46512 17.7442H16.186C16.3017 17.7442 16.3953 17.6505 16.3953 17.5349V6.65115C16.3953 6.53556 16.3017 6.44185 16.186 6.44185H4.46512ZM3 6.65115C3 5.84199 3.65595 5.18604 4.46512 5.18604H16.186C16.9952 5.18604 17.6512 5.84199 17.6512 6.65115V17.5349C17.6512 18.344 16.9952 19 16.186 19H4.46512C3.65595 19 3 18.344 3 17.5349V6.65115Z"
                                    fill="#000814" />
                                <path id="Vector_2"
                                    d="M10.3257 2.25581C9.05416 2.25581 8.02339 3.2866 8.02339 4.55814V7.48837C8.02339 7.83515 7.74227 8.11628 7.39549 8.11628C7.0487 8.11628 6.76758 7.83515 6.76758 7.48837V4.55814C6.76758 2.59303 8.36061 1 10.3257 1C12.2908 1 13.8839 2.59303 13.8839 4.55814V7.48837C13.8839 7.83515 13.6027 8.11628 13.256 8.11628C12.9092 8.11628 12.628 7.83515 12.628 7.48837V4.55814C12.628 3.2866 11.5973 2.25581 10.3257 2.25581Z"
                                    fill="#000814" />
                                <path id="Vector_3"
                                    d="M10.3247 15.4505C10.7393 15.4505 11.0747 15.1147 11.0747 14.7005V13.284H12.4912C12.9058 13.284 13.2412 12.9482 13.2412 12.534C13.2412 12.1198 12.9058 11.784 12.4912 11.784H11.0747V10.3672C11.0747 9.95297 10.7393 9.61716 10.3247 9.61716C9.91016 9.61716 9.57471 9.95297 9.57471 10.3672V11.784H8.1582C7.74365 11.784 7.4082 12.1198 7.4082 12.534C7.4082 12.9482 7.74365 13.284 8.1582 13.284H9.57471V14.7005C9.57471 15.1147 9.91016 15.4505 10.3247 15.4505Z"
                                    fill="#000814" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>

            <button @click="e => addFavorites(e.target.closest('.card').id)" class="card__favorites-btn"
                v-show="!inFavorites">
                <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                    fill="none">
                    <path
                        d="M14.7233 24.2784C14.3267 24.4184 13.6733 24.4184 13.2767 24.2784C9.89333 23.1234 2.33333 18.305 2.33333 10.1384C2.33333 6.53337 5.23833 3.6167 8.81999 3.6167C10.9433 3.6167 12.8217 4.64337 14 6.23003C15.1783 4.64337 17.0683 3.6167 19.18 3.6167C22.7617 3.6167 25.6667 6.53337 25.6667 10.1384C25.6667 18.305 18.1067 23.1234 14.7233 24.2784Z"
                        fill="white" stroke="#FFD60A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div v-show="inFavorites">
                <button @click="e => removeFavorites(e.target.closest('.card').id)" id="removeBtn"
                    class="card__favorites-btn" v-show="!removeBtn">
                    <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                        viewBox="0 0 28 28" fill="none">
                        <path
                            d="M14.7233 24.2784C14.3266 24.4184 13.6733 24.4184 13.2766 24.2784C9.89331 23.1234 2.33331 18.305 2.33331 10.1384C2.33331 6.53337 5.23831 3.6167 8.81998 3.6167C10.9433 3.6167 12.8216 4.64337 14 6.23003C15.1783 4.64337 17.0683 3.6167 19.18 3.6167C22.7616 3.6167 25.6666 6.53337 25.6666 10.1384C25.6666 18.305 18.1066 23.1234 14.7233 24.2784Z"
                            fill="#FFD60A" stroke="#FFD60A" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button id="removeBtn" class="card__favorites-btn" v-show="removeBtn">
                    <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                        viewBox="0 0 28 28" fill="none">
                        <path
                            d="M14.7233 24.2784C14.3266 24.4184 13.6733 24.4184 13.2766 24.2784C9.89331 23.1234 2.33331 18.305 2.33331 10.1384C2.33331 6.53337 5.23831 3.6167 8.81998 3.6167C10.9433 3.6167 12.8216 4.64337 14 6.23003C15.1783 4.64337 17.0683 3.6167 19.18 3.6167C22.7616 3.6167 25.6666 6.53337 25.6666 10.1384C25.6666 18.305 18.1066 23.1234 14.7233 24.2784Z"
                            fill="#FFD60A" stroke="#FFD60A" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </li>
</template>

<script setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import { useCounterStore } from '~/store/counter';
import { useProductsStore } from '~/store/products';
import addBasked from '~/utils/backed';
import addFavorites from '~/utils/favorites';


const counterStore = useCounterStore();
const productsStore = useProductsStore();

const favorites = ref(null);

onMounted(async () => {
    favorites.value = await JSON.parse(localStorage.getItem('favorites'));
});

const { img, id, title, description, views, price, brand, inCart, inFavorites, removeBtn, newPrice } =
    defineProps(['id', 'brand', 'img', 'title', 'description', 'views', 'price', 'inCart', 'inFavorites', 'removeBtn', 'newPrice']);
const removeFavorites = (id) => {
    favorites.value = favorites.value.filter(product => product._id !== id);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));

    productsStore.updateProductInFavorites(id, false);

    counterStore.deleteOne('favorites');
};

</script>
