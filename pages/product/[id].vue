<template>
    <div>
        {{ product }}
    </div>
</template>

<script setup>
    import { useProductStore } from '~/store/product';
    const { id } = useRoute().params;
    const product = useProductStore()
    product.getProduct(id)
</script>

<style lang="scss" scoped>

</style>