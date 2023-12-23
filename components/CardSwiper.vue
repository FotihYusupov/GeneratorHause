<template>
    <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide><img :src="images[0]" width="170" height="100" alt=""></swiper-slide>
        <swiper-slide><img :src="images[1]" width="170" height="100" alt=""></swiper-slide>
        
    </swiper>
</template>
<script >
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';

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
    const {images} = defineProps(['images'])
    console.log(images);
</script>
  