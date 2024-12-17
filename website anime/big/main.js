let header = document.querySelector('header');
let menu = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

 });




var Swiper = new Swiper(".coming-contianer", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
    display: 55000,
    disableOnInteraction: false,
  },

  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },

    568: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4,
    },

    968: {
      slidesPerView: 5,
    },

    
  }
})