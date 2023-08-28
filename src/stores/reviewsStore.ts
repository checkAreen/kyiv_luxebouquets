import { defineStore } from 'pinia';
import { type GoogleReviews } from '@/types/reviews';
import type Button from '@/types/button';

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

    btnData: {
      content: 'Read reviews',
      style: 'lg:w-[12vw] md:w-[21.2vw] w-full xl:h-[3.8vw] lg:h-[4vw] md:h-[7.3vw] sm:h-[9vw] h-[14vw] bg-white xl:py-4 xl:px-6 lg:py-2 lg:px-0 px-6 sm:py-4 py-2 hover:bg-black',
      type: 'button',
      textStyle:{
        common: 'lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw] text-[4vw]',

        mainText: {
          static: 'text-black',
          hovered: '-translate-y-5',
          unhovered: 'xl:translate-y-1 lg:translate-y-1 md:translate-y-2 sm:translate-y-1 translate-y-1'
        },

        secondText: {
          static: 'text-white',
          hovered: 'xl:-translate-y-7 lg:-translate-y-3 sm:-translate-y-6 -translate-y-4',
          unhovered: 'xl:translate-y-2 lg:translate-y-5  md:translate-y-2 translate-y-5'
        }
      }
    } as Button
  })
})