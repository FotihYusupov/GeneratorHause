<template>
    <swiper  :allowTouchMove="false"  :spaceBetween="30" :speed="3000" :slidesPerView="6.5" :centeredSlides="true" :loop="true" :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    }" :modules="modules" class="brand_swiper">

        <swiper-slide v-for="brand in arr" v-bind:key="brand.id">
            <img :src="brand.url" alt="">
        </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { arr} from '../utils/images'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay],
        };
    },
};
</script>
<style lang="scss">
.brand_swiper {
    transition-timing-function: linear;

    .swiper-wrapper {
        -webkit-transition-timing-function: linear !important;
        -o-transition-timing-function: linear !important;
        transition-timing-function: linear !important;
    }
}
</style>
  