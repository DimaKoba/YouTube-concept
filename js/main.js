//https://swiperjs.com/get-started  -  site with this code

const swiperfirst = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true, //слайды перелистываются даже если закончились
    slidesPerView: 6,
   // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  });

 
  const swiperMiddle = new Swiper('.channel-slider-middle', {
    // Optional parameters
    loop: true, //слайды перелистываются даже если закончились
    slidesPerView: 3,
   // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-middle-part',
      prevEl: '.channel-button-prev-middle-part',
    },
  });
 
 
  const swiperThirdLine = new Swiper('.channel-slider-lineThird', {
    // Optional parameters
    loop: true, //слайды перелистываются даже если закончились
    slidesPerView: 6,
   // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-lineThird',
      prevEl: '.channel-button-prev-lineThird',
    },
  });
 
 
 
 
 









