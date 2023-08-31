<script setup lang="ts">
  import { useNavStore } from '../stores/navStore'
  import { ref, watch, onBeforeUnmount, onBeforeMount } from 'vue'
  import type { Ref } from 'vue'
  import { useScreen } from 'vue-screen'
  import Link from './UI/Link.vue'
  import { useRoute } from 'vue-router'

  // VARIABLES
  let isMenuOpened: Ref<boolean> = ref(false)
  const navStore = useNavStore()
  const screen = useScreen()
  const route = useRoute()
  const emit = defineEmits(['showMenu'])
  /* FUNCTIONS */
  function showMenu() {
    isMenuOpened.value = !isMenuOpened.value
    emit('showMenu', isMenuOpened.value)
  }

  let watchScreenWidth = watch(
    () => screen.width,
    () => {
      if (screen.width > 1024) isMenuOpened.value = false
    },
    { immediate: true }
  )

  onBeforeUnmount(() => {
    watchScreenWidth()
  })
</script>

<template>
  <div class="sticky top-0 w-full">
    <!-- !NAVBAR -->
    <div class="relative bg-white grid grid-cols-2 border-y-[1px] border-black">
      <!-- !LEFT -->
      <!-- Wide -->
      <div class="hidden lg:grid grid-cols-2">
        <div class="grid grid-cols-2">
          <div
            v-for="item in navStore.bigMenu.filter((i) => i.id < 3)"
            :key="item.id"
            class="menu-item border-r-[1px] border-black py-8 text-center"
          >
            <button
              type="button"
              class="h-[1.56vw] font-medium font-primary text-[1.12vw] overflow-hidden"
              @click.prevent="$router.push({ name: route.fullPath === '/' ? item.title : item.title_2 })"
            >
              <Link
                :link="route.fullPath === '/' ? item.title : item.title_2"
              />
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <!-- Narrow -->
      <div class="lg:hidden grid grid-cols-1">
        <button
          @click="showMenu()"
          type="button"
          class="sm:py-10 py-8 border-r-[1px] border-black md:w-[16%] sm:w-[25%] w-[40%] h-[60px] relative"
        >
          <div
            v-for="item in navStore.burgerMenu"
            :key="item.id"
            class="burger-menu"
            :class="[isMenuOpened ? item.active : item.unActive]"
          ></div>
        </button>
      </div>
      <!-- !RIGHT -->
      <!-- Wide -->
      <div class="hidden lg:grid grid-cols-2">
        <div></div>
        <div class="grid grid-cols-2">
          <div
            v-for="item in navStore.bigMenu.filter((i) => i.id >= 3)"
            :key="item.id"
            class="menu-item border-l-[1px] border-black py-8 text-center"
          >
            <button
              type="button"
              class="h-[1.56vw] font-medium font-primary text-[1.12vw] overflow-hidden"
            >
              <Link :link="item.title" />
            </button>
          </div>
        </div>
      </div>
      <!-- Narrow -->
      <div class="lg:hidden grid grid-cols-1 justify-items-end">
        <button
          type="button"
          class="border-l-[1px] border-black md:w-[16%] sm:w-[25%] w-[50%] h-[auto] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="md:w-[4vw] sm:w-[6vw] w-[8vw]"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 22q-.825 0-1.413-.588T4 20V8q0-.825.588-1.413T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.588 1.413T18 22H6Zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.713-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.713-.288T8 10V8H6v12Zm4-14h4q0-.825-.588-1.413T12 4q-.825 0-1.413.588T10 6ZM6 20V8v12Z"
            />
          </svg>
        </button>
      </div>
      <!-- !DROPDOWN MENU START -->
      <div
        :class="[isMenuOpened ? 'top-[100%]' : 'md:-top-[100vw] -top-[150vw]']"
        class="lg:hidden absolute w-full bg-white -z-50 duration-300"
      >
        <!-- Links -->
        <div
          v-for="item in navStore.dropdownMenu"
          :key="item.id"
          class="w-full p-[4.16vw] border-b-[1px] border-black"
        >
          <button
            type="button"
            class="font-primary text-black font-medium md:text-[2.73vw] sm:text-[3.66vw] text-[5vw]"
            @click.prevent="$router.push({ name: route.fullPath === '/' ? item.title : item.title_2 }); showMenu()"
          >
            {{ route.fullPath === '/' ? item.title : item.title_2 }}
          </button>
        </div>
        <!-- Documents -->
        <div class="grid gap-y-4 md:py-[3vw] p-[4.22vw] border-b-[1px] border-black">
          <a
            v-for="item in navStore.docs"
            :key="item.id"
            href="#"
            class="text-black font-primary font-medium"
          >
            {{ item.title }}
          </a>
        </div>
        <!-- Social Media -->
        <div class="flex justify-between border-b-[1px] border-black">
          <a
            href="#"
            v-for="item in navStore.socialMedia"
            :key="item.id"
            v-html="item.title"
            class="md:p-[6vw] px-[5vw] py-[10vw]"
          />
        </div>
      </div>
      <!-- !DROPDOWN MENU END -->
    </div>
  </div>
</template>