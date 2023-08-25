<script setup lang="ts">
  import { useReviewsStore } from '@/stores/reviewsStore';
  import { ref, type Ref } from 'vue';
  import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  import { useScreen } from 'vue-screen';
  import { type Button as ButtonType } from '@/types/button';
  import Button from '../UI/Button.vue';

  const reviews = useReviewsStore();
  const isHovered:Ref<boolean> = ref(false);
  let screen = useScreen();

  // BUTTON STYLES
  const btnData:ButtonType = {
    content: 'Read reviews',
    style: 'lg:w-[12vw] md:w-[21.2vw] w-full xl:h-[3.8vw] lg:h-[4vw] md:h-[7.3vw] sm:h-[9vw] h-[14vw] bg-white xl:py-4 xl:px-6 lg:py-2 lg:px-0 px-6 sm:py-4 py-2 hover:bg-black',
    type: 'button',
    textStyle:{
      common: 'lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw] text-[3.7vw]',

      mainText: {
        static: 'text-black',
        hovered: '-translate-y-5',
        unhovered: 'xl:translate-y-1 lg:translate-y-1 md:translate-y-2 translate-y-1'
      },

      secondText: {
        static: 'text-white',
        hovered: 'xl:-translate-y-7 lg:-translate-y-3 sm:-translate-y-6',
        unhovered: 'xl:translate-y-2 lg:translate-y-5  md:translate-y-2 translate-y-5'
      }
    }
  }
</script>

<template>
  <div class="font-primary text-black font-medium bg-white flex flex-col border-b-[1px] border-black xl:py-20 xl:px-20 lg:py-12 lg:px-12 md:px-20 md:py-20 py-10 px-4 items-center">
    <!-- Logo and "Reviews" -->
    <div class="xl:mb-6 lg:mb-3 sm:mb-6 mb-3">
      <div class="flex flex-col xl:mb-0 lg:mb-2 sm:mb-0 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="28" viewBox="0 0 78 28" fill="none">
          <path d="M11.4384 12.2686V9.67273H20.3551C20.4461 10.1307 20.5 10.6738 20.5 11.2639C20.5 13.2099 19.9539 15.6193 18.1928 17.3354C16.4801 19.0732 14.2936 20 11.392 20C6.01779 20 1.5 15.7369 1.5 10.5C1.5 5.26305 6.01779 1 11.392 1C14.3642 1 16.4801 2.135 18.0739 3.61757L16.1958 5.44769C15.0552 4.40501 13.5097 3.59404 11.392 3.59404C7.46862 3.59404 4.40164 6.67502 4.40164 10.5C4.40164 14.325 7.46862 17.406 11.392 17.406C13.9369 17.406 15.3859 16.4103 16.3147 15.5052C17.0708 14.7685 17.5686 13.7131 17.7618 12.2686H11.4384Z" fill="#4285F4"/>
          <path d="M34 14C34 17.4555 31.306 20 28 20C24.694 20 22 17.4537 22 14C22 10.5232 24.694 8 28 8C31.306 8 34 10.5232 34 14ZM31.3732 14C31.3732 11.8408 29.8113 10.3634 28 10.3634C26.1887 10.3634 24.6268 11.8408 24.6268 14C24.6268 16.1361 26.1887 17.6366 28 17.6366C29.8113 17.6384 31.3732 16.1379 31.3732 14Z" fill="#EA4335"/>
          <path d="M47 14C47 17.4555 44.306 20 41 20C37.694 20 35 17.4537 35 14C35 10.5232 37.694 8 41 8C44.306 8 47 10.5232 47 14ZM44.3732 14C44.3732 11.8408 42.8113 10.3634 41 10.3634C39.1887 10.3634 37.6268 11.8408 37.6268 14C37.6268 16.1361 39.1887 17.6366 41 17.6366C42.8113 17.6384 44.3732 16.1379 44.3732 14Z" fill="#FBBC05"/>
          <path d="M60 8.37496V19.5301C60 24.1178 57.2728 26 54.0472 26C51.0125 26 49.1857 23.9763 48.4984 22.3294L50.8939 21.3405C51.3201 22.3515 52.365 23.5517 54.0472 23.5517C56.1112 23.5517 57.3914 22.2816 57.3914 19.905V19.0117H57.2969C56.6799 19.7653 55.4942 20.4234 54.0009 20.4234C50.8698 20.4234 48 17.7178 48 14.2347C48 10.7295 50.8698 8 54.0009 8C55.4942 8 56.6799 8.65802 57.2969 9.38773H57.3914V8.37312H60V8.37496ZM57.5804 14.2365C57.5804 12.0474 56.1093 10.4483 54.2362 10.4483C52.339 10.4483 50.7494 12.0474 50.7494 14.2365C50.7494 16.4017 52.339 17.9769 54.2362 17.9769C56.1112 17.9788 57.5804 16.4017 57.5804 14.2365Z" fill="#4285F4"/>
          <path d="M64 2V20H61V2H64Z" fill="#34A853"/>
          <path d="M73.8543 15.9763L75.8871 17.34C75.2324 18.3167 73.6514 20 70.9182 20C67.5303 20 65 17.3631 65 14C65 10.4309 67.5515 8 70.6235 8C73.7185 8 75.2307 10.4771 75.7283 11.8177L76 12.4996L68.0261 15.8183C68.6367 17.0222 69.5842 17.6366 70.9164 17.6366C72.2504 17.6366 73.1768 16.976 73.8543 15.9763ZM67.5974 13.8171L72.928 11.5904C72.6351 10.8411 71.7528 10.3173 70.7153 10.3173C69.3813 10.3173 67.5303 11.4981 67.5974 13.8171Z" fill="#EA4335"/>
        </svg>
      </div>
      <h6 class="uppercase text-center lg:text-[.98vw] md:text-[1.8vw] sm:text-[2.5vw] text-[3.2vw]">
        Reviews
      </h6>
    </div>
    <!-- Title and Review content -->
    <div class="flex flex-col items-center mb-16">
      <h1 class="lg:text-[3.8vw] md:text-[6.5vw] text-[8.8vw] font-semibold xl:mb-4 lg:mb-0 mb-4">
        Our Clients say
      </h1>
      <Carousel
        :i18n="{
          'iconArrowRight': 'Next testimonial',
          'iconArrowLeft': 'Previous testimonial'
        }"
        :autoplay="10000"
        :wrap-around="true"
        class="w-full"
      >
        <Slide v-for="item in reviews.googleReviews" :key="item.id" class="mb-8">
          <blockquote class="flex flex-col items-center">
            <q class="lg:text-[2.7vw] md:text-[4.3vw] text-[6.7vw] leading-[130%] font-normal italic mb-4">
              {{ item.text }}
            </q>
            <p class="lg:text-[1.25vw] md:text-[2.4vw] text-[3.2vw]">
              {{ '- ' + item.author }}
            </p>
          </blockquote>
        </Slide>
        <template #addons>
          <Navigation v-if="screen.width >= 1024">
            <template #next>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"/>
                </svg>
              </span>
            </template>
            <template #prev>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z"/>
                </svg>
              </span>
            </template>
          </Navigation>
          <Pagination />
        </template>
      </Carousel>
    </div>
    <!-- Button -->
    <Button
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      :is-hovered="isHovered"
      :btn="btnData"
    />
  </div>
</template>

<style lang="scss" scoped>
  .carousel{
    &__slide{
      padding: 0 24px;
    }
    &__pagination{
      margin-top: 2%;
    }
  }

  @media screen and (max-width: 1024px){
    .carousel__pagination{
      margin-top: 5%;
    }
  }
</style>