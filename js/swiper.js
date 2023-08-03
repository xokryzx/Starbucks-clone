new Swiper('.left__swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion__swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.promotion__swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion__swiper-prev',
    nextEl: '.promotion__swiper-next',
  },
});
