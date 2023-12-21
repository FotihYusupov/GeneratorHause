<template>
    <li>
        {{ title }}
        {{ description }}
    </li>
</template>

<script setup>
    import { defineProps } from 'vue';

    const { title, description } = defineProps(['title', 'description']);
</script>

<style lang="scss" scoped>

</style>