$(document).ready(function () {

   var carouselSteps = $('.steps__carousel');

   carouselSteps.on("init", function (event, slick) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });

   carouselSteps.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });


   carouselSteps.slick({
      prevArrow: $('.steps__arrow--prev'),
      nextArrow: $('.steps__arrow--next'),
      dots: false,
      mobileFirst: true,
      responsive: [

         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 1430,
            settings: "unslick"
         }
      ]
   });

});



