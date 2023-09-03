import { defineStore } from 'pinia';
import type Button from '@/types/button'

export const useAboutStore = defineStore('about', {
  state: () => ({
    btnData: {
      content: 'Learn more',
      style: 'lg:w-44 w-full xl:h-14 lg:h-12 sm:h-16 h-12 lg:pt-4 lg:px-6 bg-white hover:bg-black',
      type: 'button',
      textStyle:{
        common: 'lg:text-base md:text-lg sm:text-xl text-base',

        mainText: {
          static: 'text-black',
          hovered: '-translate-y-10',
          unhovered: 'xl:-translate-y-0 lg:-translate-y-1 md:-translate-0 translate-y-3'
        },

        secondText: {
          static: 'text-white',
          hovered: 'xl:-translate-y-6 lg:-translate-y-7 md:-translate-y-4 -translate-y-3',
          unhovered: ''
        }
      }
    } as Button
  })
})