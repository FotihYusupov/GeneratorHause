<template>
    <swiper :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide><img :src="images[0]" alt=""></swiper-slide>

    </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = ref([Pagination])


const { images } = defineProps(['images'])
</script>
