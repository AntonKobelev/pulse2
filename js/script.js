// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: false,
//         prevArrow: '<button type="button" class="slick-prev"><img src = "../img/icons/carousel/chevron_left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src = "../img/icons/carousel/chevron_right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]

//       });
//   });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false, 
    nav: false,
    responsive: {
        300: {
            items: 1,
            nav: true
        },
        768: {
          items: 1,
          nav: true
        },
        1000: {
            items: 1,
            nav: false
        }
      }
    
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

