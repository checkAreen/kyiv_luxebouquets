<script setup lang="ts">
  import ProductCard from '@/components/HomePage/ProductCard.vue';
  import { useHomeStore } from '@/stores/homeStore';
  import MainHomeSection from '@/components/HomePage/MainHomeSection.vue';
  import AboutUs from '@/components/HomePage/AboutUs.vue';
  import Features from '@/components/HomePage/Features.vue';
  import Contacts from '@/components/HomePage/Contacts.vue';
  import Services from '@/components/HomePage/Services.vue';
  import Reviews from '@/components/HomePage/Reviews.vue';

  const homeStore = useHomeStore();
</script>

<template>
  <div class="home">
    <!--! First Section -->
    <div class="grid lg:grid-cols-2 grid-cols-1">
      <!-- Left -->
      <MainHomeSection />
      <!-- Right -->
      <div>
        <ProductCard :productCard="homeStore.productCard"/>
      </div>
    </div>
    <AboutUs />
    <Features />
    <Contacts />
    <Services />
    <Reviews />
  </div>
</template>

<style scoped land="scss">
  .home{
    background-image: linear-gradient(rgba(18, 18, 18, .35), rgba(18, 18, 18, .35)),
                      url(/images/services/services_bg.png);
    background-position: 0, 50%;
    background-size: auto, cover;
    background-attachment: scroll, fixed;
  }
</style>