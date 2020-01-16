$(document).ready(function () {
   var carouseladvantages = $('.advantages__carousel');

   carouseladvantages.on("init", function (event, slick) {
      $(".step-count--advantages").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });

   carouseladvantages.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count--advantages").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });


   carouseladvantages.slick({
      prevArrow: $('.advantages__arrow--prev'),
      nextArrow: $('.advantages__arrow--next'),
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