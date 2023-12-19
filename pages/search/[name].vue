<template>
    {{ name }}
</template>

<script setup>
    const { name } = useRoute().params;
</script>