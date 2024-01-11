<template>
    <swiper :spaceBetween="10" :direction="'vertical'" :speed="3000" :pagination="{
        clickable: true,
    }" :autoplay="{
    delay: 2000,
    disableOnInteraction: false
}" :modules="modules" class="hero-swiper">
        <swiper-slide>
            <div class="hero-first">

            </div>
        </swiper-slide>
        <swiper-slide v-for="hero in data.reverse().slice(0, 4)" v-bind:key="hero">
            <div class="slide_content">
                <div class="slide_content_text">
                    <span>{{ hero.category.category_name }}</span>
                    <span>{{ hero.brand.brand_name }}</span>
                    <span class="ellipsis">{{ hero.product_title }}</span>
                    <a class="sale_item_link" href="/sale">
                        <span>Узнать больше</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 12" fill="none">
                            <path
                                d="M29.7729 6.65228H0.703278C0.35749 6.65228 0.078125 6.35894 0.078125 5.99587C0.078125 5.63279 0.35749 5.33946 0.703278 5.33946H28.2627L24.4688 1.35587C24.2246 1.09946 24.2246 0.683047 24.4688 0.426637C24.713 0.170227 25.1096 0.170227 25.3538 0.426637L30.2163 5.53228C30.3961 5.721 30.4488 6.00202 30.3511 6.24817C30.2535 6.49228 30.0249 6.65228 29.7729 6.65228Z"
                                fill="#000814" />
                            <path
                                d="M24.904 11.7641C24.7438 11.7641 24.5836 11.7005 24.4624 11.5713C24.2182 11.3149 24.2182 10.8984 24.4624 10.642L29.3308 5.53024C29.575 5.27383 29.9716 5.27383 30.2158 5.53024C30.46 5.78665 30.46 6.20307 30.2158 6.45948L25.3474 11.5713C25.2244 11.7005 25.0642 11.7641 24.904 11.7641Z"
                                fill="#000814" />
                        </svg>
                    </a>
                </div>
                <div class="slide_content_details">
                    <span>
                        {{ DiscCalc(hero.product_price, hero.new_price) }}%
                    </span>
                    <img :src="hero.product_img[0]" alt="">
                    <span>{{ hero.new_price }} сум</span>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script setup>
import DiscCalc from '../utils/rus/disccalc'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

let modules = ref([Autoplay, Pagination]);

const { data } = defineProps(['data']);
</script>
  