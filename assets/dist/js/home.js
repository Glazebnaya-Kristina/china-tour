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
            breakpoint: 1022,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 1023,
            settings: {
               centerMode: true,
               variableWidth: true
            }
         }
      ]
   });


   var carouselMain = $('.main-banner__carousel');

   carouselMain.on("init", function (event, slick) {
      $(".step-count--main").html('<span class="main-banner__count">0' + (slick.currentSlide + 1) + '</span>' + '<span class="main-banner__count main-banner__count--slick">0' + slick.slideCount + '</span>');
   });

   carouselMain.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count--main").html('<span class="main-banner__count">0' + (slick.currentSlide + 1) + '</span>' + '<span class="main-banner__count main-banner__count--slick">0' + slick.slideCount + '</span>');
   });


   carouselMain.slick({
      prevArrow: '<button type="button" class="slick-prev main-banner__arrow main-banner__arrow--prev"><i class="icon-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-prev main-banner__arrow main-banner__arrow--next"><i class="icon-angle-right"></i></button>',
      dots: true,
      appendDots: $('.main-banner__carousel-controls'),
      dotsClass: 'main-banner__dots-list list',
      mobileFirst: true,
      fade: true,
      cssEase: 'linear',
      asNavFor: '.main-banner__carousel-nav'
   });

   $('.main-banner__carousel-nav').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.main-banner__carousel',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      variableWidth: true
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


   $('.main-banner__button-video--desc').click(function () {
      addFrame();
   });

   $('.main-banner__button-video--mob').click(function () {
      addFrame();
   });

   $('.modal__overlay').on('click', function () {
      $('.video-youtube__content').html('');
   });


   function addFrame() {
      var dataYoutube = $('.video-youtube__content').attr('data-youtube');
      $('.video-youtube__content').html('<iframe src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
   }


   // валидация формы
   $('#form').submit(function() {

      if (!document.form.name.value || !document.form.email.value || !document.form.textarea.value ) {
         $('.communication__feedback-input').addClass('error');
         $('.text-error').addClass('text-error--active');
         $(this).find('input').val('');
         $('#form').trigger('reset');
         valid = false;
         return valid;
      }
      $.ajax({
         type: "POST",
         url: "mail.php",
         data: $(this).serialize()
      }).done(function() {
         $(this).find('input').val('');
         $('#form').trigger('reset');
         $('.communication__feedback-input').removeClass('error');
         $('.text-error').removeClass('text-error--active');
         openModal();
      });

      return false;
   });

   function openModal() {
      $('.modal').addClass('modal--opened');
      $('.popup[data-modal="thanks-registration"]').addClass('popup--opened');
      $('.js-overlay-modal').addClass('modal__overlay--opened');
      $('body').addClass('hidden');
   }

});
