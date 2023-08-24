<script setup lang="ts">
  import { ref, toRefs, type Ref } from 'vue';
  import { type Button as ButtonType } from '@/types/button'

  const props = defineProps<{
    btn: ButtonType,
    isHovered: boolean
  }>()

  const { btn, isHovered } = toRefs(props);
</script>

<template>
  <button
    class="overflow-hidden border-[1px] border-black"
    :class="btn.style"
    :type="btn.type"
  >
    <div
      v-for="index in 2" :key="index"
      :class="[
        btn.textStyle.common,
        index === 1 ? btn.textStyle.mainText.static : btn.textStyle.secondText.static,
        isHovered && index === 1 ? btn.textStyle.mainText.hovered :
        isHovered && index === 2 ? btn.textStyle.secondText.hovered :
        !isHovered && index === 1 ?  btn.textStyle.mainText.unhovered : btn.textStyle.secondText.unhovered
      ]"
      class="uppercase"
    >
      {{ btn.content }}
    </div>
  </button>
</template>