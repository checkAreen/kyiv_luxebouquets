<script setup lang="ts">
  import { useNavStore } from '@/stores/navStore';
  import { directive as motion } from '@vueuse/motion'
  import { useContactsStore } from '@/stores/contactsStore';
  import { ref, type Ref } from 'vue';
  import Button from '../UI/Button.vue';

  // VARIABLES
  const navStore = useNavStore();
  const contactsStore = useContactsStore();
  let isHovered:Ref<boolean> = ref(false);
  let phoneInput = ref<string>('');
</script>

<template>
  <div class="bg-white lg:grid lg:grid-cols-2 flex flex-col h-720px  font-primary text-black font-medium">
    <!-- ! LEFT -->
    <div class="flex flex-col lg:h-full lg:border-r-[1px] border-black">
      <!-- TOP -->
      <div class="flex flex-col h-3/6 border-b-[1px] border-black md:px-20 px-4 md:py-20 sm:py-10 py-8 gap-6">
        <h1
          v-motion
            :initial="{ opacity: 0, rotate: 45 }"
            :visible="{ opacity: 1, rotate: 0, transition:{ duration: 700 }}"
          class="origin-left font-semibold lg:text-[3.8vw] md:text-[6.5vw] sm:text-[8.8vw] text-[10vw]"
        >
          To Contact Us
        </h1>
        <h3
          v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition:{ duration: 700 }}"
          class="font-normal lg:text-[1.25vw] md:text-[2.4vw] sm:text-[3.2vw] text-[5vw]"
        >
          We will call you back
        </h3>
        <form @submit.prevent="console.log('Booked!')" action="#" method="post" class="flex md:flex-row flex-col w-full sm:mb-10 mb-4 gap-4">
          <input
            v-model="phoneInput"
            type="tel" placeholder="+380 XX XXX XX XX"
            class="h-14 text-sm border-[1px] w-full p-4"
          >
          <Button
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
            :is-hovered="isHovered"
            :btn="contactsStore.btnData"
          />
        </form>
      </div>
      <!-- BOTTOM -->
      <div class="md:grid md:grid-cols-2 flex flex-col md:text-center h-3/6">
        <!-- Phone -->
        <div class="flex flex-col md:border-r-[1px] border-b-[1px] border-black">
          <h1 class="flex items-center md:justify-center lg:h-1/5 border-b-[1px] border-black lg:text-[2.7vw] md:text-[4.9vw] sm:text-[6.7vw] text-[8.5vw] py-4 px-2.5">
            Phone
          </h1>
          <div class="flex flex-col lg:h-4/5 sm:h-[28vw] h-[40vw] md:items-center justify-center sm:px-6 px-2 md:py-6 py-10 gap-6">
            <div v-for="item in contactsStore.numbers" :key="item.id" class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21h-1.05ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.125.375 2.113T6.025 9Zm8.95 8.95q1 .425 2.013.675T19 18.95v-2.2l-2.35-.475l-1.675 1.675ZM6.025 9Zm8.95 8.95Z"/>
              </svg>
              <div class="lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw] text-[5vw]">
                {{ '+' + item.num }}
              </div>
            </div>
          </div>
        </div>
        <!-- Address -->
        <div class="flex flex-col border-b-[1px] border-black">
          <h1 class="flex items-center md:justify-center lg:h-1/5 border-b-[1px] border-black lg:text-[2.7vw] md:text-[4.9vw] sm:text-[6.7vw] text-[8.5vw] py-4 px-2.5">
            Address
          </h1>
          <div class="flex flex-col lg:h-4/5 sm:h-[28vw] h-[40vw] md:items-center justify-center sm:px-6 px-4 md:py-6 py-10 gap-6">
            <p class="uppercase lg:text-[.98vw] md:text-[1.8vw] sm:text-[2.5vw] text-[5vw]">
              opening hours: 8 to 11 p.m.
            </p>
            <div class="flex sm:gap-2 gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 16.475q2.475-2 3.738-3.85T17 9.15q0-1.4-.513-2.388t-1.262-1.6q-.75-.612-1.625-.887T12 4q-.725 0-1.6.275t-1.625.888q-.75.612-1.262 1.6T7 9.15q0 1.625 1.263 3.475T12 16.475Zm0 2.125q-.25 0-.488-.075t-.437-.225q-2.025-1.575-4.05-3.963T5 9.15q0-1.775.638-3.113T7.274 3.8q1-.9 2.25-1.35T12 2q1.225 0 2.475.45t2.25 1.35q1 .9 1.638 2.238T19 9.15q0 2.8-2.025 5.188t-4.05 3.962q-.2.15-.438.225T12 18.6Zm0-7.6q.825 0 1.413-.588T14 9q0-.825-.588-1.413T12 7q-.825 0-1.413.588T10 9q0 .825.588 1.413T12 11ZM6 22q-.425 0-.713-.288T5 21q0-.425.288-.713T6 20h12q.425 0 .713.288T19 21q0 .425-.288.713T18 22H6Zm6-12.85Z"/>
              </svg>
              <p class="lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw] text-[5vw]">
                15/4 Khreshchatyk Street, Kyiv
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ! RIGHT -->
    <div class="flex flex-col lg:order-last order-first lg:h-full h-[44%]">
      <div class="overflow-hidden xl:block lg:relative xl:h-auto lg:h-[90%] border-b-[1px] border-black">
        <img
          v-motion
            :initial="{scale: 1.5}"
            :visible="{scale: 1, transition: {duration: 300}}"
          src="/images/contacts/contact_img.webp" alt="Kyiv LuxeBouquets"
          class="xl:relative lg:absolute w-full lg:h-full xl:h-auto"
        >
      </div>
      <div class="md:grid md:grid-cols-2 flex flex-col md:items-center items-start border-b-[1px] border-black">
        <h3 class="md:border-r-[1px] border-black text-center lg:text-[2.7vw] md:text-[4.9vw] sm:text-[6.7vw] text-[10vw] py-4 md:px-10 px-4">
          Follow us
        </h3>
        <div class="flex justify-between xl:gap-x-8 lg:gap-x-4 gap-x-8 py-4 xl:px-10 lg:px-4 md:px-10 px-4">
          <a v-for="item in navStore.socialMedia" :key="item.id" v-html="item.title" class="cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>