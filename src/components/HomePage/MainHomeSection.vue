<script setup lang="ts">
  import { directive as motion } from '@vueuse/motion'
</script>

<template>
  <div class="bg-white lg:p-[5.56vw] md:p-[9vw] px-4 sm:py-10 py-8 lg:border-r-[1px] border-b-[1px] border-black">
    <div class="sticky top-[10.5vw]">
      <h1 class="relative overflow-hidden h-auto text-black lg:text-[4.65vw] md:text-[8.7vw] text-[10vw] font-semibold font-primary md:leading-[120%] leading-[130%] mb-4">
        <div
          class="origin-left"
          v-motion
            :initial="{ opacity: 0, y: 100, rotate: 45}"
            :enter="{ opacity: 1, y: 0, rotate: 0, transition: { duration: 700}}"
        >
          Kyiv
        </div>
        <div
          class="origin-left"
          v-motion
            :initial="{ opacity: 0, y: 100, rotate: 45}"
            :enter="{ opacity: 1, y: 0, rotate: 0, transition: { duration: 700}}"
        >
          LuxeBouquets
          <sup>®</sup>
        </div>
      </h1>
      <div class="relative overflow-hidden h-auto">
        <p
          class="font-primary font-normal lg:text-[1.25vw] md:text-[2.4vw] text-[4.4vw] text-black md:mb-[3.3rem] mb-[1.5rem] origin-left"
          v-motion
              :initial="{ opacity: 0, y: 100, rotate: 45 }"
              :enter="{ opacity: 1, y: 0, rotate: 0, transition: {duration: 700}}"
        >
          Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our
          <span class="italic">Online Flower Delivery Service</span>
        </p>
      </div>
      <div class="grid grid-cols-2 border-t-[1px] border-black md:pt-7 pt-4">
        <div class="relative overflow-hidden border-r-[1px] border-black lg:h-[13.9vw] h-[32vw]">
          <div
            v-motion
              :initial="{height: 256}"
              :enter="{height: 0, transition:{duration: 700}}"
            class="relative bg-white h-full z-50"
          />
          <img src="/images/image_1.png" alt="image_1" class="absolute object-cover w-[90%] md:-top-5 top-0">
        </div>
        <div class="relative overflow-hidden h-auto grid items-end md:pl-6 pl-3">
          <p
            class="font-primary font-normal text-black lg:text-[.98vw] md:text-[1.8vw] text-[2.9vw] leading-[120%] origin-left"
            v-motion
              :initial="{ opacity: 0, y: 100, rotate: 45 }"
              :enter="{ opacity: 1, y: 0, rotate: 0, transition: {duration: 700}}"
          >
            Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>