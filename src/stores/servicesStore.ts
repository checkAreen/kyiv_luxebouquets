import { defineStore } from 'pinia';
import { type HoveredButtons } from '@/types/btnServices';

export const useServicesStore = defineStore('btnStyles', {
  state: () => ({
    btnStyle: [
      {
        id: 1,
        hovered: 'xl:-translate-y-9 -translate-y-4',
        unhovered: 'xl:-translate-y-1 lg:-translate-y-0 sm:translate-y-4 translate-y-3',
        staticStyles: 'text-black'
      },
      {
        id: 2,
        hovered: 'xl:-translate-y-9 -translate-y-3',
        unhovered: 'xl:-translate-y-1 lg:-translate-y-0 translate-y-10',
        staticStyles: 'text-white'
      }
    ] as HoveredButtons[],

    transparentBtnStyle: [
      {
        id: 1,
        hovered: 'lg:-translate-y-9 -translate-y-12',
        unhovered: 'xl:translate-y-1 lg:-translate-y-0 md:translate-y-3 -translate-y-1',
        staticStyles: 'text-white'
      },
      {
        id: 2,
        hovered: 'xl:-translate-y-7 md:-translate-y-4 sm:-translate-y-6 -translate-y-7',
        unhovered: 'lg:translate-y-5 translate-y-7',
        staticStyles: 'text-black'
      }
    ] as HoveredButtons[],
  })
})