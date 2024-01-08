<template>
    <NuxtLayout :name="route.fullPath.slice(1, 3) == 'ru' ? 'russian' : 'default'">
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const route = useRoute()
</script>