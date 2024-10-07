import { space } from "postcss/lib/list";

const swiper = new Swiper('.swiper', {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    pagination : {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
  }, 
    
  autoplay: {
      delay:3000,
    },
    
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      
      768: {
          slidesPerView: 2.5,
          spaceBetween: 18
        
      },
      1200: {
          slidesPerView: 4,
          spaceBetween: 18
          
        
      },
    },   
});
  const swiperRew = new Swiper('.swiper-rew', {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    pagination : {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }, 
    
    autoplay: {
      delay:3000,
    },

    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      
      768: {
          slidesPerView: 2,
          spaceBetween: 16
        
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 28
          
        
      },
    },   
  })
 const swiperByNow = new Swiper('.swiper-bynow', {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    pagination : {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }, 
    
   autoplay: {
      delay:3000,
   },
   
    breakpoints: {
      375: {
            slidesPerView: 1,
          
      },
      
        768: {
          loop: false,
          slidesPerView: 3,
        },
      

    },   
  });