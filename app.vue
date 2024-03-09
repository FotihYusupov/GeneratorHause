<template>
    <Head>
      <Title>GENERATOR HOUSE</Title>
      <Meta name="description" content=""/>
      <Meta property="og:title" content="Genarator House"/>
      <Meta property="og:description" content="Generator House official web page"/>
      <Meta property="og:url" content="https://generatorhouse.uz/"/>
      <Meta property="og:type" content="website"/>
      <Meta name="keywords" content="Genarator House, House, Genarator, Karcher, Gazli Generator, Stabilizator, Benzinli Genarator, Betonameshalka, Dizel Genarator, Inverter Genarator, Генераторный Дом, Генератор, Инверторный генератор, Дизельный генератор, Бетонамешалка, Бензиновый Генератор, Стабилизатор, Газовый генератор"/>
      <Meta name="rating" content="Family-Friendly"/>
      <Meta name="yandex-verification" content="4adbf28d4115d8b8" />
      <Meta name="google-site-verification" content="_GCrBB-LPH-dnA6CJFQ1zfPZfPIUDK5bpaNWBXKLr5A" />
      <Link rel="canonical" href="https://generatorhouse.uz/"/>
      <Link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <NuxtLayout :name="route.fullPath.slice(1, 3) == 'ru' ? 'russian' : 'default'">
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const route = useRoute()
</script>
