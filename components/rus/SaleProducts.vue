<template>
    <div class="sale_items">
        <a href="/ru/sale" class="sale_item" v-for="e in sale.reverse().slice(0, 4)" v-bind:key="e">
            <img :src="e.product_img[0]" alt="">
            <div class="sale_item_details">
                <p class="sale_item_name">{{ e.product_title }}</p>
                <p class="sale_Chegirma">Скидка {{ DiscCalc(e.product_price, e.new_price) }}%</p>
            </div>
        </a>
    </div>
</template>
<script setup>
import DiscCalc from '~/utils/rus/disccalc';
const { sale } = defineProps(['sale']);
</script>