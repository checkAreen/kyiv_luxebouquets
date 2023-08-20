<script setup lang="ts">
import { type Features } from "@/types/features";

  const props = defineProps<{features: Features}>();
</script>

<template>
  <div class="overflow-hidden md:px-20 md:py-20 px-4 py-10 border-b-[1px] border-black font-medium">
    <h3
      v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0, transition:{ duration: 700 }}"
      class="font-primary text-black lg:text-[2.7vw] md:text-[4.9vw] sm:text-[6.7vw] text-[6.9vw] mb-4"
    >
      {{ features.title }}
    </h3>
    <p
      v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0, transition:{ duration: 700 }}"
      class="text-primary font-primary font-normal lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.9vw] text-[4.3vw]"
    >
      {{ features.description }}
    </p>
  </div>
</template>