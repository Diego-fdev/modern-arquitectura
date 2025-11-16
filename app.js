const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper-about", {
  // Optional parameters
  loop: true,
  autoplay: true,
});
