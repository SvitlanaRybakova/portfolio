new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.project-pagination',
    bulletClass: 'project-bullet',
    bulletActiveClass: 'project-bullet-active',
    clickable: true, 
  },
  autoplay: {
    delay: 4000,
  },
  effect:'cube',
 
});

