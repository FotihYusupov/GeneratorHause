<template>
    <div class="container">
        <div class="images-wrapper">
            <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                <Slide v-for="(image, index) in product.data.product.product_img" :key="index">
                    <img :src="image" alt="Gallery Image" class="carousel__item" />
                </Slide>
            </Carousel>

            <Carousel
                id="thumbnails"
                :items-to-show="3"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
                class="slide"
            >

                <Slide v-for="(image, index) in product.data.product.product_img" :key="index">
                    <div class="carousel__item" @click="slideTo(index + 1)">
                        <img :src="image" alt="Gallery Image" class="carousel__item" />
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
</template>


<script setup>
    import { Carousel, Slide } from 'vue3-carousel';
    
    import 'vue3-carousel/dist/carousel.css';

    import { useProductStore } from '~/store/product';
    const { id } = useRoute().params;
    const product = useProductStore()
    product.getProduct(id)
    const getProduct = async () => {
        await product.getProduct(id)
    }
    getProduct()

    const currentSlide = ref(0)
    const slideTo = (index) => {
        currentSlide.value = index;
    }
</script>

<style scoped>
    .thumbnail {
    cursor: pointer;
    }
</style>
