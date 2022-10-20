const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,



  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

    // автопрокрутка
    autoplay: {
      //   пауза
      delay: 2500
    },
// рука
    grabCursor: true,

      //   скорость
  speed: 900,

    // отступ между слайдами
    spaceBetween: 30,

});