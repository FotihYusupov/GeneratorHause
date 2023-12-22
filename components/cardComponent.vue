<template>
    <li class="card" :id="id" :key="id">
            <CardSwiper :images="imm"/>
            <div class="card__content-wrapper">
                <NuxtLink class="link" :to="'/product/' + id"><h3 class="card__title">{{ title }}</h3></NuxtLink>
                <p class="card__desc">{{ description }}</p>
                <p class="card__views">{{ views }} views</p>
                <p class="card__price">{{ price }} So'm</p>
                <button @click="e => addBasked(e.target.closest('.card').id)" class="card__basked-btn" :disabled="inCart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                        <path d="M1.46512 5.44185C1.34952 5.44185 1.25581 5.53556 1.25581 5.65115V16.5349C1.25581 16.6505 1.34952 16.7442 1.46512 16.7442H13.186C13.3017 16.7442 13.3953 16.6505 13.3953 16.5349V5.65115C13.3953 5.53556 13.3017 5.44185 13.186 5.44185H1.46512ZM0 5.65115C0 4.84199 0.655954 4.18604 1.46512 4.18604H13.186C13.9952 4.18604 14.6512 4.84199 14.6512 5.65115V16.5349C14.6512 17.344 13.9952 18 13.186 18H1.46512C0.655954 18 0 17.344 0 16.5349V5.65115Z" fill="#000814"/>
                        <path d="M7.32572 1.25581C6.05416 1.25581 5.02339 2.2866 5.02339 3.55814V6.48837C5.02339 6.83515 4.74227 7.11628 4.39549 7.11628C4.0487 7.11628 3.76758 6.83515 3.76758 6.48837V3.55814C3.76758 1.59303 5.36061 0 7.32572 0C9.29082 0 10.8839 1.59303 10.8839 3.55814V6.48837C10.8839 6.83515 10.6027 7.11628 10.256 7.11628C9.90918 7.11628 9.62804 6.83515 9.62804 6.48837V3.55814C9.62804 2.2866 8.59727 1.25581 7.32572 1.25581Z" fill="#000814"/>
                    </svg>
                </button>
                <button @click="e => addFavorites(e.target.closest('.card').id)" class="card__favorites-btn" v-show="!inFavorites">
                    <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14.7233 24.2784C14.3267 24.4184 13.6733 24.4184 13.2767 24.2784C9.89333 23.1234 2.33333 18.305 2.33333 10.1384C2.33333 6.53337 5.23833 3.6167 8.81999 3.6167C10.9433 3.6167 12.8217 4.64337 14 6.23003C15.1783 4.64337 17.0683 3.6167 19.18 3.6167C22.7617 3.6167 25.6667 6.53337 25.6667 10.1384C25.6667 18.305 18.1067 23.1234 14.7233 24.2784Z" fill="white" stroke="#FFD60A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div v-show="inFavorites">
                    <button @click="e => removeFavorites(e.target.closest('.card').id)" id="removeBtn" class="card__favorites-btn" v-show="!removeBtn">
                        <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M14.7233 24.2784C14.3266 24.4184 13.6733 24.4184 13.2766 24.2784C9.89331 23.1234 2.33331 18.305 2.33331 10.1384C2.33331 6.53337 5.23831 3.6167 8.81998 3.6167C10.9433 3.6167 12.8216 4.64337 14 6.23003C15.1783 4.64337 17.0683 3.6167 19.18 3.6167C22.7616 3.6167 25.6666 6.53337 25.6666 10.1384C25.6666 18.305 18.1066 23.1234 14.7233 24.2784Z" fill="#FFD60A" stroke="#FFD60A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </button>
                    <button id="removeBtn" class="card__favorites-btn" v-show="removeBtn">
                        
                        <svg class="pointer-events" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M14.7233 24.2784C14.3266 24.4184 13.6733 24.4184 13.2766 24.2784C9.89331 23.1234 2.33331 18.305 2.33331 10.1384C2.33331 6.53337 5.23831 3.6167 8.81998 3.6167C10.9433 3.6167 12.8216 4.64337 14 6.23003C15.1783 4.64337 17.0683 3.6167 19.18 3.6167C22.7616 3.6167 25.6666 6.53337 25.6666 10.1384C25.6666 18.305 18.1066 23.1234 14.7233 24.2784Z" fill="#FFD60A" stroke="#FFD60A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </button>
                </div>
            </div>
    </li>
</template>

<script setup>
    import { ref, onMounted, defineProps } from 'vue';
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

    const { img, id, title, description, views, price, inCart, inFavorites, removeBtn } = 
        defineProps(['id', 'img', 'title', 'description', 'views', 'price', 'inCart', 'inFavorites', 'removeBtn']);
        console.log(img);
    const removeFavorites = (id) => {
        favorites.value = favorites.value.filter(product => product._id !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites.value));

        productsStore.updateProductInFavorites(id, false);

        counterStore.deleteOne('favorites');
    };

</script>


<style lang="scss" scoped>

</style>