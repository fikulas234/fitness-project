new Swiper(".swiper", {
  // slidesPerView: 3,
  // centeredSlides: true,
  // spaceBetween: 24,
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".right-arrow",
    prevEl: ".left-arrow",
  },

  breakpoints: {
    400: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  },
});
