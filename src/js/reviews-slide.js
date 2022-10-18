const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    dynamivBullets: true,
  },
  // курсор рука
  grabCursor: true,

  //  автовысота
  autoHeight: true,

  // отступ между слайдами
  spaceBetween: 60,

  //   бесконечный слайдер
  loop: true,

  // автопрокрутка
  autoplay: {
    //   пауза
    delay: 3000,
  },
  //   скорость
  speed: 900,
});
