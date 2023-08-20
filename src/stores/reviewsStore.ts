import { defineStore } from 'pinia';
import { type GoogleReviews } from '@/types/reviews';
import { type HoveredButtons } from '@/types/btnServices';

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    googleReviews: [
      {
        id: 1,
        text: 'Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!',
        author: 'Ronald Richards'
      },
      {
        id: 2,
        text: 'Flower subscriptions revolutionized my Kiev hotel! Conveniently customize and receive fresh bouquets regularly. Highly recommended for hassle-free floral arrangements!',
        author: 'Leonid Yurushev'
      }
    ] as GoogleReviews[],

    btnReviews: [
      {
        id: 1,
        hovered: '-translate-y-5',
        unhovered: 'xl:translate-y-0 lg:translate-y-1 sm:translate-y-0 translate-y-1',
        staticStyles: 'text-black'
      },
      {
        id: 2,
        hovered: 'xl:-translate-y-8 lg:-translate-y-4 md:-translate-y-8 sm:-translate-y-7 -translate-y-3',
        unhovered: 'xl:translate-y-2 lg:translate-y-5  translate-y-2',
        staticStyles: 'text-white'
      }
    ] as HoveredButtons[]
  })
})