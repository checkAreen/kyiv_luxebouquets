<script setup lang="ts">
  import { toRefs } from 'vue';
  import type Button from '@/types/button'

  const props = defineProps<{
    btn: Button,
    isHovered: boolean
  }>()

  const { btn, isHovered } = toRefs(props);
</script>

<template>
  <button
    class="overflow-hidden border-[1px] border-black duration-300 z-30"
    :class="btn.style"
    :type="btn.type as 'button' | 'submit' | 'reset'"
  >
    <div class="flex flex-col items-center justify-center overflow-hidden">
      <div
        v-for="index in 2" :key="index"
        :class="[
          btn.textStyle.common,
          index === 1 ? btn.textStyle.mainText.static : btn.textStyle.secondText.static,
          isHovered && index === 1 ? btn.textStyle.mainText.hovered :
          isHovered && index === 2 ? btn.textStyle.secondText.hovered :
          !isHovered && index === 1 ?  btn.textStyle.mainText.unhovered : btn.textStyle.secondText.unhovered
        ]"
        class="uppercase duration-300 font-medium"
      >
        {{ btn.content }}
      </div>
    </div>

  </button>
</template>