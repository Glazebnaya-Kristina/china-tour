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


   // ховер на секции Услуги
   $('.services__link-wrapper').on('mouseenter', function () {
      $(this).addClass('services__link-wrapper--active');
      $(this).next().addClass('active-p');
   });

   $('.services__list li').on('mouseleave', function () {
      $(this).children('.services__link-wrapper').removeClass('services__link-wrapper--active');
      $(this).children('p').removeClass('active-p');
   });



   // кнока подробнее
   // ширина самого блока с текстом(видимый текст)
   var defaultHeight = 240;
   // ширина самого блока с текстом(видимый текст)
   var text = $(".about-us__description");
   var textHeight = text[0].scrollHeight;
   var button = $(".about-us__more-button");
   text.css({"max-height": defaultHeight, "overflow": "hidden"});

   button.on("click", function () {
      var newHeight = 0;
      if (text.hasClass("about-us__description--active")) {
         newHeight = defaultHeight;
         text.removeClass("about-us__description--active");
      } else {
         newHeight = textHeight;
         text.addClass("about-us__description--active");
      }
      //скорость анимации поднимание и опускание шторки
      text.animate({
         "max-height": newHeight
      }, 500);
      //скорость анимации поднимание и опускание шторки
      console.log(newHeight);
   });
});
