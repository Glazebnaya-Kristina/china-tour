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


   $('.reviews__carousel').slick({
      mobileFirst: true,
      infinite: true,
      dots: true,
      dotsClass: 'reviews__dots',
      prevArrow: '<button type="button" class="slick-prev reviews__arrow reviews__arrow--prev"><i class="icon-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-prev reviews__arrow reviews__arrow--next"><i class="icon-angle-right"></i></button>',
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
               slidesToShow: 3,
               centerMode: true,
            }
         },
         {
            breakpoint: 1429,
            settings: {
               centerMode: true,
               variableWidth: true
            }
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
   var defaultHeight2 = 460;
   // ширина самого блока с текстом(видимый текст)
   var text = $(".about-us__description");
   var textHeight = text[0].scrollHeight;
   var button = $(".about-us__more-button");
   if (jQuery(window).width() >= 768){
      text.css({"max-height": defaultHeight, "overflow": "hidden"});
   } else if(jQuery(window).width() <= 767){
      text.css({"max-height": defaultHeight2, "overflow": "hidden"});
   }

   button.on("click", function () {
      var newHeight = 0;
      if (text.hasClass("about-us__description--active")) {

         if (jQuery(window).width() >= 768){
            newHeight = defaultHeight;
            text.removeClass("about-us__description--active");
         } else if (jQuery(window).width() <= 767){
            newHeight = defaultHeight2;
            text.removeClass("about-us__description--active");
         }

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
