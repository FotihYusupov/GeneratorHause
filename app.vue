<template>
    <Head>
      <Title>GENERATOR HOUSE</Title>
      <Meta name="description" content=""/>
      <Meta property="og:title" content="Genarator House"/>
      <Meta property="og:description" content=""/>
      <Meta property="og:url" content="https://generatorhouse.uz/"/>
      <Meta property="og:type" content="website"/>
      <Meta name="keywords" content="Genarator House"/>
      <Meta name="keywords" content="House"/>
      <Meta name="keywords" content="Genarator"/>
      <Meta name="keywords" content="Karcher"/>
      <Meta name="keywords" content="Gazli Generator"/>
      <Meta name="keywords" content="Stabilizator"/>
      <Meta name="keywords" content="Benzinli Genarator"/>
      <Meta name="keywords" content="Betonameshalka"/>
      <Meta name="keywords" content="Dizel Genarator"/>
      <Meta name="keywords" content="Inverter Genarator"/>
      <Meta name="keywords" content="Генераторный Дом"/>
      <Meta name="keywords" content="Генератор"/>
      <Meta name="keywords" content="Газовый генератор"/>
      <Meta name="keywords" content="Стабилизатор"/>
      <Meta name="keywords" content="Бензиновый Генератор"/>
      <Meta name="keywords" content="Бетонамешалка"/>
      <Meta name="keywords" content="Дизельный генератор"/>
      <Meta name="keywords" content="Инверторный генератор"/>
      <Meta name="rating" content="Family-Friendly"/>
      <Meta name="yandex-verification" content="4adbf28d4115d8b8" />
      <Meta name="google-site-verification" content="_GCrBB-LPH-dnA6CJFQ1zfPZfPIUDK5bpaNWBXKLr5A" />
      <Link rel="canonical" href="https://generatorhouse.uz/"/>
      <Link rel="icon" type="image/x-icon" href=""/>
    </Head>
    <NuxtLayout :name="route.fullPath.slice(1, 3) == 'ru' ? 'russian' : 'default'">
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const route = useRoute()
</script>
