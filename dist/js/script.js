$(document).ready(function () {
  const swiper = new Swiper(".mySwiper", {
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const reviewsBlockSlider = new Swiper(".reviewsBlockSlider", {
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const newsSlider = new Swiper(".newsSlider", {
    slidesPerView: 4,
    spaceBetween: 30,
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
  });
});
