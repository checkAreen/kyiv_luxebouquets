<script setup lang="ts">
  import { ref, type Ref } from 'vue';
  import { useScreen } from 'vue-screen';

  let isHovered:Ref<boolean> = ref(false);
  const props = defineProps<{link:string}>()
  let screen = useScreen();

  const mouseEnter = () => {
    if(screen.width > 1024) isHovered.value = true
  }

  const mouseLeave = () => {
    if(screen.width > 1024) isHovered.value = false
  }
</script>

<template>
  <div
    class="flex flex-col overflow-hidden cursor-pointer lg:h-[1.56vw] sm:h-[2.91vw] h-[4.68vw]"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <a
      v-for="index in 2" :key="index"
      class="lg:text-[1.12vw] md:text-[2.08vw] sm:text-[2.46vw] text-[3.9vw] font-medium duration-300"
      :class="[
        index === 1 ? 'text-black' : 'text-secondary',
        isHovered && index === 1 ? '-translate-y-7' :
        !isHovered && index === 1 ? '' :
        isHovered && index === 2 ? '-translate-y-8' : ''
      ]"
    >
      {{ props.link }}
    </a>
  </div>
</template>