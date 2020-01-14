$(document).ready(function () {
   var carouseladvantages = $('.reviews__carousel');

   carouseladvantages.on("init", function (event, slick) {
      $(".step-count--reviews").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });

   carouseladvantages.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count--reviews").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });


   carouseladvantages.slick({
      prevArrow: $('.reviews__arrow--prev'),
      nextArrow: $('.reviews__arrow--next'),
      dots: false,
      mobileFirst: true,
      responsive: [

         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 1022,
            settings: "unslick"
         }
      ]
   });

   /*--- Пагинация ---*/
   var paginatinItem = document.querySelectorAll('.pagination li');

   for (var i = 0; i < paginatinItem.length; i++) {
      paginatinItem[i].onclick = function (e) {
         e.preventDefault();
         if (this.classList) {
            for (var j = 0; j < paginatinItem.length; j++) {
               paginatinItem[j].classList.remove('active');
            }
            this.classList.add('active');
         } else {
            this.active += ' ' + active;
         }
      }
   }
});