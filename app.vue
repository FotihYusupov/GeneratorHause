<template>

  <Head>
    <Title>GENERATOR HOUSE</Title>
    <Meta name="description" content="Genarator House, House, Genarator, Karcher, Gazli Generator, Stabilizator, Benzinli Genarator, Betonameshalka, Dizel Genarator, Inverter Genarator, Генераторный Дом, Генератор, Инверторный генератор, Дизельный генератор, Бетонамешалка, Бензиновый Генератор, Стабилизатор, Газовый генератор" />
    <Meta name="keywords" content="Genarator House, House, Genarator, Karcher, Gazli Generator, Stabilizator, Benzinli Genarator, Betonameshalka, Dizel Genarator, Inverter Genarator, Генераторный Дом, Генератор, Инверторный генератор, Дизельный генератор, Бетонамешалка, Бензиновый Генератор, Стабилизатор, Газовый генератор" />
    <Meta name="rating" content="Family-Friendly" />
    <Link rel="canonical" href="https://generatorhouse.uz/" />
    <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <Meta property="og:type" content="business.business" />
    <Meta property="og:title" content="GENERATOR HOUSE" />
    <Meta property="og:url" content="https://generatorhouse.uz/" />
    <Meta property="og:image" content="https://generatorhouse.uz/favicon.ico" />
    <Meta property="og:description" content="Genarator House, House, Genarator, Karcher, Gazli Generator, Stabilizator, Benzinli Genarator, Betonameshalka, Dizel Genarator, Inverter Genarator, Генераторный Дом, Генератор, Инверторный генератор, Дизельный генератор, Бетонамешалка, Бензиновый Генератор, Стабилизатор, Газовый генератор" />
    <Meta property="business:contact_data:street_address" content="Xalqa Avtomabil Yo'li" />
    <Meta property="business:contact_data:locality" content="Toshkent" />
    <Meta property="business:contact_data:region" content="Toshkent" />
    <Meta property="business:contact_data:postal_code" content="100000" />
    <Meta property="business:contact_data:country_name" content="Uzbekistan" />
    <Meta name="yandex-verification" content="4adbf28d4115d8b8" />
    <Meta name="google-site-verification" content="_GCrBB-LPH-dnA6CJFQ1zfPZfPIUDK5bpaNWBXKLr5A" />
  </Head>
  <NuxtLayout :name="route.fullPath.slice(1, 3) == 'ru' ? 'russian' : 'default'">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
</script>