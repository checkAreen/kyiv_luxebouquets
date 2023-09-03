import{d as u,f,J as h,o,c as i,a as t,t as p,K as l,u as a,i as n,F as w,h as g,j as m,G as v,e as _}from"./index-a6a263d4.js";const b={class:"relative flex flex-col justify-center items-center lg:p-[2.23vw] p-[3.2vw]"},y={class:"font-primary font-medium lg:text-[2.7vw] md:text-[4.9vw] sm:text-[6.7vw] text-[6.9vw] text-black text-center"},x={href:"#",class:"absolute sm:bottom-10 bottom-5 flex cursor-pointer items-center"},k=t("svg",{class:"lg:w-6 sm:w-5 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[t("path",{fill:"currentColor",d:"M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"})],-1),$={class:"border-l-[1px] border-black overflow-hidden"},C=["src","alt"],S=u({__name:"FromLeftSideCard",props:{card:{}},setup(c){let e=f(!1);return h(),(r,s)=>(o(),i("div",{onMouseover:s[0]||(s[0]=d=>n(e)?e.value=!0:e=!0),onMouseleave:s[1]||(s[1]=d=>n(e)?e.value=!1:e=!1),class:"grid grid-cols-2 border-b-[1px] border-black"},[t("div",b,[t("h1",y,p(r.card.title),1),t("a",x,[t("h3",{class:l([[a(e)?"mr-5":"mr-2"],"font-primary font-semibold lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw] text-[3.7vw] text-black duration-300 hover:underline"])}," Shop now ",2),k])]),t("div",$,[t("img",{src:`./images/productCards/${r.card.img}.png`,alt:r.card.img,class:l([[a(e)?"scale-110":""],"w-full duration-300"])},null,10,C)])],32))}}),F={class:"overflow-hidden"},L=["src","alt"],q={class:"relative flex flex-col justify-center items-center lg:p-[2.23vw] p-[3.2vw] border-l-[1px] border-black"},B={class:"font-primary font-medium lg:text-[2.7vw] md:text-[4.9vw] sm:text-[6.7vw] text-[6.9vw] text-black text-center"},H={href:"#",class:"absolute sm:bottom-10 bottom-5 flex cursor-pointer items-center"},M=t("svg",{class:"lg:w-6 sm:w-5 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[t("path",{fill:"currentColor",d:"m5.83 9l5.58-5.58L10 2l-8 8l8 8l1.41-1.41L5.83 11H18V9z"})],-1),j=u({__name:"FromRightSideCard",props:{card:{}},setup(c){let e=f(!1);return h(),(r,s)=>(o(),i("div",{onMouseover:s[0]||(s[0]=d=>n(e)?e.value=!0:e=!0),onMouseleave:s[1]||(s[1]=d=>n(e)?e.value=!1:e=!1),class:"grid grid-cols-2 border-b-[1px] border-black"},[t("div",F,[t("img",{src:`./images/productCards/${r.card.img}.png`,alt:r.card.img,class:l([[a(e)?"scale-110":""],"w-full duration-300"])},null,10,L)]),t("div",q,[t("h1",B,p(r.card.title),1),t("a",H,[M,t("h3",{class:l([[a(e)?"ml-5":"ml-2"],"font-primary font-semibold lg:text-[1.12vw] md:text-[2.1vw] sm:text-[2.5vw] text-[3.7vw] text-black duration-300 hover:underline"])}," Shop now ",2)])])],32))}}),z={class:"bg-white"},O=u({__name:"ProductCard",props:{productCard:{}},setup(c){return(e,r)=>(o(),i("div",z,[(o(!0),i(w,null,g(e.productCard,s=>(o(),i("div",{key:s.id},[s.id%2!==0?(o(),m(S,{key:0,card:s},null,8,["card"])):v("",!0),s.id%2===0?(o(),m(j,{key:1,card:s},null,8,["card"])):v("",!0)]))),128))]))}}),R=_("home",{state:()=>({productCard:[{id:1,img:"card_1",title:"Fresh Flowers",link:"fresh_flowers"},{id:2,img:"card_2",title:"Dried Flowers",link:"dried_flowers"},{id:3,img:"card_3",title:"Live Plants",link:"live_plants"},{id:4,img:"card_4",title:"Aroma Candels",link:"aroma_candels"},{id:5,img:"card_5",title:"Fresheners",link:"fresheners"}],features:[{id:1,title:"Stylish bouquets by florists",description:"At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service."},{id:2,title:"On-time delivery",description:"Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably."},{id:3,title:"Safe payment",description:"You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence."},{id:4,title:"Subscription by your needs",description:"With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs."}]})});export{O as _,R as u};
