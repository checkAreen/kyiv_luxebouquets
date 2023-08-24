import { defineStore } from 'pinia';
import {type Phone } from '@/types/phoneNumber';
import { type HoveredButtons } from '@/types/btnContacts';


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
  })
})