import { defineStore } from 'pinia';
import {type Phone } from '@/types/phoneNumber';
import type Button from '@/types/button';


export const useContactsStore = defineStore('phones', {
  state: () => ({
    numbers: [
      {
        id: 1,
        num: 380980099777,
        containerStyle: '',
        fontStyle: 'font-primary text-black font-medium lg:text-[1.12vw] text-[2.1vw]'
      },
      {
        id: 2,
        num: 380980099111,
        containerStyle: '',
        fontStyle: 'font-primary text-black font-medium lg:text-[1.12vw] text-[2.1vw]'
      }
    ] as Phone[],

    btnData: {
      content: 'book a call',
      style: 'h-14 flex flex-col items-center bg-black w-full sm:py-4 py-2 px-6 hover:bg-primary',
      type: 'submit',
      textStyle:{
        common: 'text-white lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw] text-[4.5vw]',

        mainText: {
          static: '',
          hovered: 'sm:-translate-y-2 -translate-y-5',
          unhovered: 'xl:translate-y-4 lg:translate-y-2 sm:translate-y-4 translate-y-3'
        },

        secondText: {
          static: '',
          hovered: 'xl:-translate-y-4 lg:-translate-y-2 sm:-translate-y-4 -translate-y-2',
          unhovered: 'md:translate-y-3 translate-y-5'
        }
      }
    } as Button
  })
})