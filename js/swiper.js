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
    delay: 5000,
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

new Swiper('.awards__swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards__swiper-prev',
    nextEl: '.awards__swiper-next',
  },
});
