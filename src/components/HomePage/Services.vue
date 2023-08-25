<script setup lang="ts">
  import { ref, type Ref} from 'vue';
  import Button from '../UI/Button.vue';
  import { type Button as ButtonType } from '@/types/button'

  const isHoveredBtn:Ref<boolean> = ref(false);
  const isHoveredTransparentBtn:Ref<boolean> = ref(false);

  // BUTTON STYLES
  // 1st btn
  const btnOneData:ButtonType = {
    content: 'Subscribe now',
    style: 'xl:h-17 lg:h-12 bg-white hover:bg-black lg:py-4 py-1 px-6',
    type: 'button',
    textStyle:{
      common: 'lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw]',

      mainText: {
        static: 'text-black',
        hovered: 'xl:-translate-y-9 -translate-y-4',
        unhovered: 'xl:translate-y-1 lg:-translate-y-0 sm:translate-y-4 translate-y-3'
      },

      secondText: {
        static: 'text-white',
        hovered: 'xl:-translate-y-7 lg:-translate-y-4 -translate-y-3',
        unhovered: 'xl:-translate-y-1 lg:-translate-y-0 translate-y-10'
      }
    }
  }
  // 2nd btn
  const btnTwoData:ButtonType = {
    content: 'Inquire Now',
    style: 'xl:h-17 lg:h-12 md:h-20 sm:h-17 h-12 xl:w-full  border-white bg-transparent hover:bg-white py-4 px-6 z-30',
    type: 'button',
    textStyle:{
      common: 'lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw]',

      mainText: {
        static: 'text-white',
        hovered: 'lg:-translate-y-9 -translate-y-12',
        unhovered: 'xl:translate-y-1 lg:-translate-y-0 md:translate-y-2 translate-y-1'
      },

      secondText: {
        static: 'text-black',
        hovered: 'xl:-translate-y-7 md:-translate-y-6 sm:-translate-y-6 -translate-y-7',
        unhovered: 'lg:translate-y-5 translate-y-7'
      }
    }
  }
</script>

<template>
  <div class="flex flex-col font-primary text-black">
    <!-- ! TITLE -->
    <div class="bg-white flex items-center justify-center border-b-[1px] border-black z-30 xl:py-20 lg:py-12 md:py-17 sm:py-12 py-10">
      <h1 class="font-semibold lg:text-[3.8vw] md:text-[6.5vw] text-[8.8vw]">
        Our Service
      </h1>
    </div>
    <!-- ! MEDIUM -->
    <div class="bg-white grid lg:grid-cols-2 grid-cols-1 border-b-[1px] border-black">
      <!-- Left -->
      <div class="overflow-hidden relative xl:h-[42vw] lg:h-[40vw] md:h-[65vw] h-[71vw] border-r-[1px] border-black">
        <div class="absolute top-0 left-0 bg-black w-full h-full opacity-30 z-30"></div>
        <img
          v-motion
            :initial="{scale: 1.4}"
            :visible="{scale: 1.15, transition: {duration: 500}}"
          src="/images/services/left_side_img.png" alt="Kyiv LuxeBouquets"
          class="w-full"
        >
      </div>
      <!-- Right -->
      <div class="flex flex-col justify-center xl:px-20 xl:py-20 lg:py-10 lg:px-10 md:px-20 md:py-20 py-10 px-4 text-center">
        <div class="flex flex-col items-center">
          <div
            v-motion
              :initial="{ opacity: 0 }"
              :visible="{ opacity: 1, transition: {duration: 500}}"
            class="overflow-hidden"
          >
            <h4 class="uppercase font-medium lg:text-[.98vw] md:text-[1.8vw] sm:text-[2.5vw] mb-6">
              Service
            </h4>
          </div>
          <div
            v-motion
              :initial="{ opacity: 0 }"
              :visible="{ opacity: 1, transition: {duration: 500}}"
            class="overflow-hidden"
          >
            <h1 class="font-semibold lg:text-[3.8vw] md:text-[6.5vw] text-[8.8vw] mb-4">
              Flower Subcriptions
            </h1>
          </div>
          <div
            v-motion
              :initial="{ opacity: 0 }"
              :visible="{ opacity: 1, transition: {duration: 500}}"
            class="overflow-hidden"
          >
            <p class="font-normal leading-[130%] text-primary lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.9vw] mb-16">
              Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.
            </p>
          </div>
          <div
            v-motion
              :initial="{ opacity: 0 }"
              :visible="{ opacity: 1, transition: {duration: 300}}"
            class="overflow-hidden w-full"
          >
            <Button
              @mouseenter="isHoveredBtn = true"
              @mouseleave="isHoveredBtn = false"
              :is-hovered="isHoveredBtn"
              :btn="btnOneData"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- ! BOTTOM -->
    <div class="bg-transparent relative text-white flex flex-col lg:h-[50vw] md:h-[65vw] h-full border-b-[1px] border-black justify-center md:px-20 px-4 md:py-20 py-10">
      <div class="flex flex-col items-center z-40">
        <div
            v-motion
              :initial="{ opacity: 0, y: 100 }"
              :visible="{ opacity: 1, y: 0, transition: {duration: 300}}"
            class="overflow-hidden"
          >
          <h4 class="uppercase font-medium lg:text-[.98vw] md:text-[1.8vw] sm:text-[2.5vw] mb-6">
            Service
          </h4>
        </div>
        <div
            v-motion
              :initial="{ opacity: 0, y: 100 }"
              :visible="{ opacity: 1, y: 0, transition: {duration: 300}}"
            class="overflow-hidden"
        >
          <h1 class="font-semibold text-center leading-[120%] lg:text-[3.8vw] md:text-[6.5vw] text-[8.8vw] mb-4">
            Wedding & Event Decor
          </h1>
        </div>
        <div
            v-motion
              :initial="{ opacity: 0, y: 100 }"
              :visible="{ opacity: 1, y: 0, transition: {duration: 300}}"
            class="overflow-hidden"
        >
          <div class="flex flex-col items-center justify-center xl:mx-96 lg:mx-20">
            <p class="font-normal text-center leading-[130%] lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.9vw] lg:mx-32 md:mx-6 sm:mx-3 sm:mb-16 mb-10">
              Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.
            </p>
          </div>
        </div>
        <div
            v-motion
              :initial="{ opacity: 0, y: 100 }"
              :visible="{ opacity: 1, y: 0,  transition: {duration: 300}}"
            class="overflow-hidden xl:w-2/12 w-full flex justify-center"
        >
        <Button
          @mouseenter="isHoveredTransparentBtn = true"
          @mouseleave="isHoveredTransparentBtn = false"
          :is-hovered="isHoveredTransparentBtn"
          :btn="btnTwoData"
        />
        </div>
      </div>
    </div>
  </div>
</template>