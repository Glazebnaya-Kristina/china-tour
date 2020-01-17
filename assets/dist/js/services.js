$(document).ready(function () {
   var carouselservices2 = $('.services__carousel');

   carouselservices2.on("init", function (event, slick) {
      $(".step-count--services").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });

   carouselservices2.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count--services").html(parseInt(slick.currentSlide + 1) + '<span> /' + slick.slideCount + '</span>');
   });


   carouselservices2.slick({
      prevArrow: $('.services__arrow--prev'),
      nextArrow: $('.services__arrow--next'),
      dots: false,
      infinite: true,
      mobileFirst: true,
      adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 3,
               centerMode: true,
               variableWidth: true
            }
         }
      ]
   });
});