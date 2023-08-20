<script setup lang="ts">
  import { type Cards } from '@/types/cards';
  import { ref } from 'vue';
  import { type Ref } from 'vue';

  const props = defineProps<{card: Cards}>();
  let isHovered:Ref<boolean> = ref(false);
</script>

<template>
  <div @mouseover="isHovered = true" @mouseleave="isHovered = false" class="grid grid-cols-2 border-b-[1px] border-black">
    <div class="relative flex flex-col justify-center items-center lg:p-[2.23vw] p-[3.2vw]">
      <h1 class="font-primary font-medium lg:text-[2.7vw] md:text-[4.9vw] sm:text-[6.7vw] text-[6.9vw] text-black text-center">
        {{ card.title }}
      </h1>
      <a href="#" class="absolute sm:bottom-10 bottom-5 flex cursor-pointer items-center">
        <h3 :class="[isHovered ? 'mr-5' : 'mr-2']" class="font-primary font-semibold lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw] text-[3.7vw] text-black duration-300 hover:underline">
          Shop now
        </h3>
        <svg class="lg:w-6 sm:w-5 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/>
        </svg>
      </a>
    </div>
    <div class="border-l-[1px] border-black overflow-hidden">
      <img :src="`/images/productCards/${card.img}.png`" :alt="card.img" :class="[isHovered ? 'scale-110' : '']" class="w-full duration-300">
    </div>
  </div>
</template>