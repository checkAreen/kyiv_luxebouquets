<script setup lang="ts">
  import { useFooterStore } from '@/stores/footer';
  import { useNavStore } from '@/stores/navStore';
  import { ref, type Ref } from 'vue';
  import { type Button as ButtonType } from '@/types/button';
  import Button from './UI/Button.vue'

  const contacts = useFooterStore().footerContacts;
  const shop = useFooterStore().footerShop;
  const service = useFooterStore().footerService;
  const about = useFooterStore().footerAbout;
  const social = useNavStore().socialMedia;

  let isHovered:Ref<boolean> = ref(false);

  // BUTTON STYLES
  const btnData:ButtonType = {
    content: 'Remind',
    style: 'flex flex-col items-center bg-black w-full hover:bg-primary',
    type: 'submit',
    textStyle:{
      common: 'text-white lg:text-[1.12vw] text-[2.1vw]',

      mainText: {
        static: '',
        hovered: '-translate-y-2 opacity-0',
        unhovered: 'xl:translate-y-4 lg:translate-y-2 md:translate-y-4 opacity-1'
      },

      secondText: {
        static: '',
        hovered: 'xl:-translate-y-4 lg:-translate-y-2 md:-translate-y-4 opacity-1',
        unhovered: 'translate-y-10 opacity-0'
      }
    }
  }
</script>

<template>
  <div class="grid lg:grid-cols-4 grid-cols-2 border-b-[1px] border-black font-primary font-medium text-black">
    <!-- Notification -->
    <div class="flex flex-col border-r-[1px] lg:border-b-0 border-b-[1px] border-black gap-6 px-10 py-10">
      <p class="font-normal leading-[130%] lg:text-[1.12vw] md:text-[2.1vw]">
        Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
      </p>
      <form @submit.prevent="console.log('Sent!')" action="#" method="post" class="flex flex-col">
        <input type="email" placeholder="Your Email" class="border-[1px] text-sm p-4 mb-4">
        <Button
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
          :is-hovered="isHovered"
          :btn="btnData"
        />
      </form>
    </div>
    <!-- Contacts -->
    <div class="flex flex-col lg:border-r-[1px] lg:border-b-0 border-b-[1px] border-black px-10 py-10 xl:gap-y-6 lg:gap-y-2 gap-y-6">
      <h3 class="lg:text-[1.45vw] md:text-[2.8vw] text-secondary">
        Contact Us
      </h3>
      <div v-for="item in contacts" :key="item.id" class="menu flex flex-col gap-y-2">
        <h4 class="lg:text-[.98vw] text-[1.8vw] text-secondary font-normal">
          {{ item.title }}
        </h4>
        <div class="flex flex-col overflow-hidden cursor-pointer lg:h-[1.56vw] md:h-[2.91vw]">
          <p
            v-for="index in 2" :key="index"
            class="text-black lg:text-[1.12vw] md:text-[2.08vw] font-medium"
          >
            {{ item.text }}
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <h3 class="lg:text-[1.45vw] md:text-[2.8vw] text-secondary mb-6">
          Follow Us
        </h3>
        <div class="flex items-start xl:gap-x-8 lg:gap-x-4 gap-x-10">
          <a v-for="item in social" :key="item.id" href="#" v-html="item.title" />
        </div>
      </div>
    </div>
    <!-- Shop and Service -->
    <div class="flex flex-col border-r-[1px] border-black px-10 py-10 xl:gap-y-6 lg:gap-y-3 gap-y-6">
      <div class="flex flex-col xl:gap-y-6 lg:gap-y-2 gap-y-6">
        <h3 class="lg:text-[1.45vw] md:text-[2.8vw] text-secondary">
          Shop
        </h3>
        <div class="flex flex-col gap-y-2">
          <a v-for="item in shop" :key="item.id" href="#" class="lg:text-[1.12vw] md:text-[2.08vw]">
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="flex flex-col xl:gap-y-6 lg:gap-y-2 gap-y-6">
        <h3 class="lg:text-[1.45vw] md:text-[2.8vw] text-secondary">
          Service
        </h3>
        <div class="flex flex-col gap-y-2">
          <a v-for="item in service" :key="item.id" href="#" class="lg:text-[1.12vw] md:text-[2.08vw]">
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
    <!-- About us -->
    <div class="flex flex-col px-10 py-10 xl:gap-y-6 lg:gap-y-2 gap-y-6">
      <h3 class="lg:text-[1.45vw] md:text-[2.8vw] text-secondary">
        About Us
      </h3>
      <div class="flex flex-col xl:gap-y-6 lg:gap-y-4 gap-y-6">
        <div class="flex flex-col gap-y-2">
          <a v-for="item in about.filter(item => item.id <= 2)" :key="item.id" href="#" class="lg:text-[1.12vw] md:text-[2.08vw]">
            {{ item.text }}
          </a>
        </div>

        <div class="flex flex-col gap-y-2">
          <a v-for="item in about.filter(item => item.id > 2)" :key="item.id" href="#" class="lg:text-[1.12vw] md:text-[2.08vw]">
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>