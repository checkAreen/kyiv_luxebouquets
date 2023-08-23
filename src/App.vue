<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  import { ref, type Ref, watch, onMounted } from 'vue';

  let isMenuOpened:Ref<boolean> = ref(false);

  const showMenu = (value:boolean) => {
    isMenuOpened.value = value
  }

  const setBodyScroll = (allow: boolean) => {
    document.body.style.overflow = allow ? '' : 'hidden';
  };

  watch(isMenuOpened, (newVal) => {
    setBodyScroll(!newVal);
  });

  onMounted(() => {
    setBodyScroll(!isMenuOpened.value);
  });
</script>

<template>
  <div>
    <NavBar @showMenu="showMenu" class="z-50" />
    <div :class="[isMenuOpened ? 'block opacity-70' : 'hidden opacity-0']" class="fixed bg-slate-300 w-screen h-screen z-10"></div>
    <router-view :class="[isMenuOpened ? 'overflow-hidden': '']"></router-view>
    <Footer />
  </div>
</template>

<style lang="scss">
:root {
  --vc-pgn-width:  12px !important;
  --vc-pgn-height: 12px !important;
  --vc-pgn-border-radius: 50% !important;
  --vc-pgn-active-color: #808080 !important;
  --vc-pgn-background-color: #D2D2D7 !important;
}
</style>
