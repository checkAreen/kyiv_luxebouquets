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
  })
})