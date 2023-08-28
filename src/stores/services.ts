import { defineStore } from 'pinia';
import type Button from '@/types/button';

export const useServiceStore = defineStore('services', {
  state: () => ({
    btnOneData: {
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
    } as Button,

    btnTwoData: {
      content: 'Inquire Now',
      style: 'xl:h-17 lg:h-12 md:h-20 sm:h-17 h-12 xl:w-full  border-white bg-transparent hover:bg-white py-4 px-6 z-30',
      type: 'button',
      textStyle:{
        common: 'lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw]',

        mainText: {
          static: 'text-white',
          hovered: 'lg:-translate-y-9 -translate-y-12',
          unhovered: 'xl:translate-y-1 lg:-translate-y-0 md:translate-y-2 sm:translate-y-1 -translate-y-1'
        },

        secondText: {
          static: 'text-black',
          hovered: 'xl:-translate-y-7 md:-translate-y-4 sm:-translate-y-6 -translate-y-7',
          unhovered: 'lg:translate-y-5 translate-y-7'
        }
      }
    } as Button
  })
})