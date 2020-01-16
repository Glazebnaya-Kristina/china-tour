$(document).ready(function () {
   function initMap() {

      var bluhera = {lat: 22.3230823, lng: 114.1680546};

      var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 14,
         center: bluhera
      });

      var marker1 = new google.maps.Marker({
         position: bluhera, map: map,icon: '../img/location.png'
      });

      var StreetBlu =
         '<div id="content">'+
         '<h2>Контакты'+'</h2>'+
         '<ul class="contacts__contacts-list list contacts">'+
         '<li>'+
         '<p class="contacts__wrapper-link"><i class="icon-mail-alt contacts__icon-email"></i><a\n' +
         '                  href="mailto:mail@mail.ru">mail@mail.ru</a></p>'+
         '</li>'+
         '<li>'+
         '<p class="contacts__wrapper-link"><i class="icon-phone-receiver"></i><a href="tel:+71234567889">+7 123 456\n' +
         '            78 89</a></p>'+
         '<p class="contacts__wrapper-link"><a href="tel:+71234567889">+7 123 456\n' +
         '            78 89</a></p>'+
         '</li>'+
         '<li>'+
         '<strong>Мессенджеры:</strong>'+
         '<ul class="list contacts__messenger-list">'+
         '<li>'+
         '<a class="contacts__messenger-link" href="#">'+
         '<span class="contacts__messenger-name">Telegram</span>'+
         '<i class="icon-telegram"></i>'+
         '</a>'+
         '</li>'+
         '<li>'+
         '<a class="contacts__messenger-link" href="#">'+
         '<span class="contacts__messenger-name">whatsapp</span>'+
         '<i class="icon-whatsapp-2"></i>'+
         '</a>'+
         '</li>'+
         '<li>'+
         '<a class="contacts__messenger-link" href="#">'+
         '<span class="contacts__messenger-name">wechat</span>'+
         '<i class="icon-wechat"></i>'+
         '</a>'+
         '</li>'+
         '</ul>'+
         '</li>'+
         '</div>';

      // Создаем информационное окно
      var infoBlu = new google.maps.InfoWindow({
         content: StreetBlu,
         maxWidth: 404
      });

      infoBlu.open(map, marker1);
   }


   initMap();
});