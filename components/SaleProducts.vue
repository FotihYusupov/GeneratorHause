<template>
    <div class="sale_items">
        <div class="sale_item" v-for="e in sale.reverse().slice(0, 4)" v-bind:key="e">
            <img :src="e.product_img[0]" alt="">
            <div class="sale_item_details">
                <p class="sale_item_name">{{ e.product_title }}</p>
                <p class="sale_discount">Discount {{ DiscCalc(e.product_price, e.new_price) }}%</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import DiscCalc from '~/utils/disccalc';
const { sale } = defineProps(['sale']);
</script>