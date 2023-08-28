<script setup lang="ts">
  import { directive as motion } from '@vueuse/motion'
  import { ref, type Ref } from 'vue';
  import Button from '../UI/Button.vue';
  import { useAboutStore } from '@/stores/about';

  // VARIABLES
  let isHovered:Ref<boolean> = ref(false);
  const aboutStore = useAboutStore();
</script>

<template>
  <div class="bg-white grid lg:grid-cols-2 grid-cols-1 font-primary text-black border-b-[1px] border-black">
    <div class="font-primary flex flex-col flex-start lg:border-r-[1px] lg:border-b-0 border-b-[1px] border-black">
      <div class="overflow-hidden md:mx-20 md:my-20 sm:my-10 mx-4 my-6">
        <h1
          v-motion
            :initial="{ opacity: 0, rotate: 45 }"
            :visible="{ opacity: 1, rotate: 0, transition:{ duration: 700 }}"
          class="origin-left lg:text-[3.8vw] md:text-[6.5vw] text-[8.8vw] font-semibold"
        >
          About Us
        </h1>
      </div>
    </div>
    <div class="md:px-20 md:py-20 sm:py-10 px-4 py-6">
      <h4
        v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0, transition:{ duration: 700 }}"
        class="lg:text-[.98vw] md:text-[1.8vw] sm:text-[2.5vw] text-[3.2vw] font-medium uppercase sm:mb-6 mb-4"
      >
        Our story
      </h4>
      <div>
        <h2
          v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, transition:{ duration: 700 }}"
          class="font-medium lg:text-[2.7vw] md:text-[4.9vw] sm:text-[6.7vw] text-[6.9vw] mb-4"
        >
          Kyiv LuxeBouquets
        </h2>
        <p
          v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, transition:{ duration: 700 }}"
          class="text-primary lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.9vw] text-[4.3vw] font-primary font-normal mb-16 z-50"
        >
          We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.
        </p>
      </div>
      <Button
        v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition:{ duration: 700 }}"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        :is-hovered="isHovered"
        :btn="aboutStore.btnData"
      />
    </div>
  </div>
</template>