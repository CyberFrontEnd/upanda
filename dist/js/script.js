$(document).ready(function () {
  $('.mobilBtn').on('click', function () {
    $('.mobilMenu').slideDown();
  });

  $('.mobilBtn__closed').on('click', function () {
    $('.mobilMenu').slideUp();
  });

  
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
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });


  const locationMobilSlider = new Swiper(".locationMobilSlider", {
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next4",
      prevEl: ".swiper-button-prev4",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
});
