$(document).ready(function () {
   var carouseladvantages2 = $('.advantages__carousel');

   carouseladvantages2.on("init", function (event, slick) {
      $(".step-count--advantages").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });

   carouseladvantages2.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count--advantages").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });


   carouseladvantages2.slick({
      prevArrow: $('.advantages__arrow--prev'),
      nextArrow: $('.advantages__arrow--next'),
      dots: false,
      infinite: true,
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 3,
               centerMode: true,
               variableWidth: true
            }
         }
         // {
         //    breakpoint: 1022,
         //    settings: {
         //       slidesToShow: 3,
         //       centerMode: true,
         //       variableWidth: true
         //    }
         // }
      ]
   });
});