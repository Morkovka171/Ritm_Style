// "use strict"

// const reviewsSwiper = document.querySelector('.swiper-reviews');

// if(reviewsSwiper) {
// const swiper = new Swiper('.swiper-reviews', {
//     loop: true,
//     centeredSlides: true, 
//     centerInsufficientSlides: true,
//     slidesPerView: 1,
//     initialSlide:1,
//     spaceBetween: 50,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });
// }

$('.slider').slick({
  centerMode: true,
  // centerPadding: '120px',
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  variableWidth: true,
  infinite: true,
  // dotsClass: 'slider__dots'
  // useTransform: true,
  // initialSlide: 1,
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 3
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '40px',
  //       slidesToShow: 1
  //     }
  //   }
  // ]
});
