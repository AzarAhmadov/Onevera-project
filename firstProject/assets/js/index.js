var swiper = new Swiper(".Myswip", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
    },
     breakpoints: {
        // when window width is <= 499px
        299: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        },

        1024: {
          slidesPerView: 3,
          spaceBetweenSlides: 40
      },
      2024: {
        slidesPerView: 4,
        spaceBetweenSlides: 40
    },
    },
  });

  let mobilBar = document.querySelector('.mobil-bar')
  let openBtn = document.querySelector('.openBtn')
  let closeBtn = document.querySelector('.closeBtn');

openBtn.addEventListener('click', () => {
  mobilBar.classList.add('active') 
})

closeBtn.addEventListener('click', () => {
  mobilBar.classList.remove('active') 
})