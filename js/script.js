$(document).ready(function(){



  var slickEnable = false;

  $(window).on('resize', function(){
    checkCarouselEnable();
  });

  checkCarouselEnable();

  function checkCarouselEnable() {
    var viewportWidth = $(window).innerWidth();
    if( viewportWidth < 600 ) {
      if( slickEnable == false ) {
        $('.carousel').slick();
        slickEnable = true;
      }
    }
    else {
      if( slickEnable == true ) {
        $('.carousel').slick('unslick');
        slickEnable = false;
      }
    }
  }


  var toggler = document.getElementById('toggler');

  console.dir(toggler)
  toggler.addEventListener('click', mainNavVisibleToggle);

  function mainNavVisibleToggle(e) {
    e.preventDefault();

    e.target.classList.toggle('toggler--close');
    document.getElementById('nav').classList.toggle('nav--visible');
  }



// var toggler = document.getElementById('toggler');
// toggler.addEventListener('click', mainNavVisibleToggle);
// function mainNavVisibleToggle(e) {
//   e.preventDefault();
//   toggler.classList.toggle('toggler--close');
//   document.getElementById('nav').classList.toggle('nav--visible');

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.941993, 30.279423],// center
            zoom: 16,
            controls: []
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/geotag.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(myPlacemark);
});
// }

});




// alert('hello world!');
// $('.post p').hide();
// var postsTexts = $('.post p').find('span');
// $(postsTexts).attr('data-number','ffff');
// $('.post__title').after(' sdsdsd <br> 123')
// $('.post__title').on('click', function(){
// 	console.log( $(this).text() );
// });


