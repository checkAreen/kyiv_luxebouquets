<script setup lang="ts">
  import ProductCard from '@/components/HomePage/ProductCard.vue';
  import { useHomeStore } from '@/stores/homeStore';

  const homeStore = useHomeStore()
</script>

<template>
  <div class="grid lg:grid-cols-2 ">
    <!-- Left -->
    <div class="xl:block lg:flex lg:flex-col lg:justify-center lg:items-center border-b-[1px] border-r-[1px] border-black px-20 md:py-20 py-10">
      <div class="sticky top-[20vw]">
        <h1 class="font-primary text-black text-center md:leading-[130%] leading-[120%] font-semibold lg:text-[4.65vw] md:text-[8.7vw] sm:text-[11.8vw] text-[11vw]">
          Choose a Category
        </h1>
      </div>
    </div>
    <!-- Right -->
    <div>
      <ProductCard :productCard="homeStore.productCard"/>
    </div>
  </div>
</template>