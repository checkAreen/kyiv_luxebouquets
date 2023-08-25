import { defineStore } from 'pinia';
import { type FooterContacts, type FooterShop } from '@/types/footer';
// import { type FooterContacts } from '@/types/footerContacts';
// import { type FooterShop } from '@/types/footerShop';
// import { type HoveredButtons } from '@/types/btnContacts';

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
  })
})