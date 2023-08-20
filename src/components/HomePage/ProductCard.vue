<script setup lang="ts">
  import { type Cards } from '@/types/cards';
  import FromLeftSideCard from './FromLeftSideCard.vue'
  import FromRightSideCard from './FromRightSideCard.vue'

  const props = defineProps<{productCard: Cards[]}>();
</script>

<template>
  <div class="bg-white">
    <div v-for="card in productCard" :key="card.id">
      <FromLeftSideCard v-if="card.id % 2 !== 0" :card="card" />
      <FromRightSideCard v-if="card.id % 2 === 0" :card="card"/>
    </div>
  </div>
</template>