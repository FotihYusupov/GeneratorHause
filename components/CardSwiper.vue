<template>
    <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide><img :src="images[0]" alt=""></swiper-slide>

    </swiper>
</template>
<script >
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>
<script setup>
import { defineProps } from 'vue';
const { images } = defineProps(['images'])
</script>
  