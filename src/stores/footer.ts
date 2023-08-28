import { defineStore } from 'pinia';
import { type FooterContacts, type FooterShop } from '@/types/footer';
import type Button from '@/types/button';

export const useFooterStore = defineStore('footer', {
  state: () => ({
    footerContacts: [
      {
        id: 1,
        title: 'Address',
        text: '15/4 Khreshchatyk Street, Kyiv'
      },
      {
        id: 2,
        title: 'Phone',
        text: '+380980099777'
      },
      {
        id: 3,
        title: 'General Enquiry:',
        text: 'Kiev.Florist.Studio@gmail.com'
      }
    ] as FooterContacts[],

    footerShop: [
      { id: 1, text: 'All Products' },
      { id: 2, text: 'Fresh Flowers' },
      { id: 3, text: 'Dried Flowers' },
      { id: 4, text: 'Live Plants' },
      { id: 5, text: 'Designer Vases' },
      { id: 6, text: 'Aroma Candles' },
      { id: 7, text: 'Freshener Diffuser' }
    ] as FooterShop[],

    footerService: [
      { id: 1, text: 'Flower Subcription' },
      { id: 2, text: 'Wedding & Event Decor' }
    ] as FooterShop[],

    footerAbout: [
      {id: 1, text: 'Our Story'},
      {id: 2, text: 'Blog'},
      {id: 3, text: 'Shipping & returns'},
      {id: 4, text: 'Terms & conditions'},
      {id: 5, text: 'Privacy policy'}
    ] as FooterShop[],

    btnData: {
      content: 'Remind',
      style: 'flex flex-col items-center bg-black w-full hover:bg-primary',
      type: 'submit',
      textStyle:{
        common: 'text-white lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw] text-[3.7vw]',

        mainText: {
          static: '',
          hovered: '-translate-y-2 opacity-0',
          unhovered: 'xl:translate-y-4 lg:translate-y-2 sm:translate-y-4 translate-y-3 opacity-1'
        },

        secondText: {
          static: '',
          hovered: 'xl:-translate-y-4 lg:-translate-y-2 sm:-translate-y-4 -translate-y-2 opacity-1',
          unhovered: 'translate-y-10 opacity-0'
        }
      }
    } as Button
  })
})