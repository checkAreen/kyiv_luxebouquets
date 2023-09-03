<script setup lang="ts">
  import { MotionDirective  as motion } from '@vueuse/motion'
  import { useHomeStore } from '@/stores/homeStore';
  import FeatureItem from './FeatureItem.vue';

  const homeStore = useHomeStore();
</script>

<template>
  <div class="bg-white grid lg:grid-cols-2 grid-cols-1">
    <div class="lg:border-r-[1px] border-b-[1px] border-black">
      <div class="sticky xl:top-[5.56vw] lg:top-[8vw] overflow-hidden md:mx-20 md:my-20 sm:my-10 mx-4 my-6">
        <h1
          v-motion
            :initial="{ opacity: 0, rotate: 45 }"
            :visible="{ opacity: 1, rotate: 0, transition:{ duration: 700 }}"
          class="origin-left lg:text-[3.8vw] md:text-[6.5vw] text-[8.8vw] font-primary font-semibold"
        >
          Why choose us ?
        </h1>
      </div>
    </div>
    <div>
      <FeatureItem v-for="item in homeStore.features" :key="item.id" :features="item" />
    </div>
  </div>
</template>