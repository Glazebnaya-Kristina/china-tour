$(document).ready(function () {
   var carouseladvantages = $('.scheme-work__carousel');

   carouseladvantages.on("init", function (event, slick) {
      $(".step-count--scheme-work").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });

   carouseladvantages.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count--scheme-work").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });


   carouseladvantages.slick({
      prevArrow: $('.scheme-work__arrow--prev'),
      nextArrow: $('.scheme-work__arrow--next'),
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
});