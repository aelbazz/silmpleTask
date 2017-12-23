var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 130,
      modifier: 2,
      slideShadows : true,
    },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
  });

// var swiper = new Swiper('#HotelsSlides', {
//     slidesPerView: 5,
//     //spaceBetween: -15,
//     //centeredSlides: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     on: {
//       transitionEnd() {
//         $(".swiper-slide").removeAttr("data-status");
        
//         $(".swiper-slide-next").attr("data-status", "next");
//         $(".swiper-slide-next").next().attr("data-status", "next1");
//         $(".swiper-slide-next").next().next().attr("data-status", "next2");
//         $(".swiper-slide-next").next().next().next().attr("data-status", "next3");
  
//         $(".swiper-slide-prev").attr("data-status", "prev");
//         $(".swiper-slide-prev").prev().attr("data-status", "prev1");
//         $(".swiper-slide-prev").prev().prev().prev("data-status", "prev2");
//         $(".swiper-slide-prev").prev().prev().prev().prev("data-status", "prev3");
//       }
//     }
//   });
