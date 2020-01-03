$(document).ready(function () {

   var carouselSteps = $('.steps__carousel');

   carouselSteps.on("init", function (event, slick) {
      $(".step-count--steps").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });

   carouselSteps.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count--steps").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });


   carouselSteps.slick({
      prevArrow: $('.steps__arrow--prev'),
      nextArrow: $('.steps__arrow--next'),
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
            breakpoint: 1023,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 1339,
            settings: "unslick"
         }
      ]
   });





   var carouseladvantages = $('.our-advantages__carousel');

   carouseladvantages.on("init", function (event, slick) {
      $(".step-count--our-advantages").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });

   carouseladvantages.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count--our-advantages").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });


   carouseladvantages.slick({
      prevArrow: $('.our-advantages__arrow--prev'),
      nextArrow: $('.our-advantages__arrow--next'),
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
            breakpoint: 1023,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 1339,
            settings: "unslick"
         }
      ]
   });

});



