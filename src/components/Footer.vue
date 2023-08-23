<script setup lang="ts">
  import { useFooterStore } from '@/stores/footer';
  import { useNavStore } from '@/stores/navStore';
  import { ref, type Ref } from 'vue';

  const contacts = useFooterStore().footerContacts;
  const shop = useFooterStore().footerShop;
  const service = useFooterStore().footerService;
  const about = useFooterStore().footerAbout;
  const btn = useFooterStore().footerBtn;
  const social = useNavStore().socialMedia;

  let isHovered:Ref<boolean> = ref(false);
</script>

<template>
  <div class="grid grid-cols-4 border-b-[1px] border-black font-primary font-medium text-black">
    <!-- Notification -->
    <div class="flex flex-col border-r-[1px] border-black gap-6 px-10 py-10">
      <p class="font-normal text-[1.12vw]">
        Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
      </p>
      <form action="#" method="post" class="flex flex-col">
        <input type="email" placeholder="Your Email" class="border-[1px] text-sm p-4 mb-4">
        <button
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
          type="submit"
          class="overflow-hidden flex flex-col items-center bg-black w-full hover:bg-primary duration-300"
        >
          <div
            v-for="item in btn" :key="item.id"
            class="uppercase text-white text-[1.12vw] duration-300"
            :class="[isHovered ? item.hovered : item.unhovered]"
          >
            Remind
          </div>
        </button>
      </form>
    </div>
    <!-- Contacts -->
    <div class="flex flex-col border-r-[1px] border-black px-10 py-10 gap-y-6">
      <h3 class="text-[1.45vw] text-secondary">
        Contact Us
      </h3>
      <div v-for="item in contacts" :key="item.id" class="flex flex-col">
        <h4 class="text-[.98vw] text-secondary font-normal">
          {{ item.title }}
        </h4>
        <p class="text-black text-[1.12vw] font-medium">
          {{ item.text }}
        </p>
      </div>
      <div class="flex flex-col">
        <h3 class="text-[1.45vw] text-secondary mb-6">
          Follow Us
        </h3>
        <div class="flex items-start gap-x-8">
          <a v-for="item in social" :key="item.id" href="#" v-html="item.title" />
        </div>
      </div>
    </div>
    <!-- Shop and Service -->
    <div class="flex flex-col border-r-[1px] border-black px-10 py-10 gap-y-6">
      <div class="flex flex-col gap-y-6">
        <h3 class="text-[1.45vw] text-secondary gap-y-6">
          Shop
        </h3>
        <div class="flex flex-col gap-y-2">
          <a v-for="item in shop" :key="item.id" href="#" class="text-[1.12vw]">
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-y-6">
        <h3 class="text-[1.45vw] text-secondary gap-y-6">
          Service
        </h3>
        <div class="flex flex-col gap-y-2">
          <a v-for="item in service" :key="item.id" href="#" class="text-[1.12vw]">
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
    <!-- About us -->
    <div class="flex flex-col px-10 py-10 gap-y-6">
      <h3 class="text-[1.45vw] text-secondary">
        About Us
      </h3>
      <div class="flex flex-col gap-y-6">
        <div class="flex flex-col gap-y-2">
          <a v-for="item in about.filter(item => item.id <= 2)" :key="item.id" href="#" class="text-[1.12vw]">
            {{ item.text }}
          </a>
        </div>

        <div class="flex flex-col gap-y-2">
          <a v-for="item in about.filter(item => item.id > 2)" :key="item.id" href="#" class="text-[1.12vw]">
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>