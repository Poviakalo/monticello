'use strct';



function initMap() {
    let map, coordinats, styles, marker, info, content;

    coordinats = {
        lat: 49.573055,
        lng: 34.576914
    };

    content = '<h1 class="info-title">I\'m here</h1>';

    styles =[
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]

    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinats,
        zoom: 14,
        styles: styles,
        disableDefaultUI: true
    });

    marker = new google.maps.Marker({
        position: coordinats,
        map: map,
        icon: 'images/marker.png',
        draggable: true
    
    });

    info = new google.maps.InfoWindow({
        content: content
      });
      marker.addListener('click', function() {
        info.open(map, marker);
      });
}



(function($) {
    $(document).ready(function() {

        //Code
        $('.slider').slick({
          dots: true,
          autoplay: true,
          autoplaySpeed: 4000,
          infinite: true,
          // fade: true,
          // speed: 3000
        });
    


        let section = {
            header: $('.header').offset().top,
            about: $('.about').offset().top,
            news: $('.news').offset().top,
            gallery: $('.gallery').offset().top,
            map: $('.map').offset().top,
            contact: $('.form').offset().top            
        }
        $(window).scroll(function() {           
            $(window).scroll(function() {
                let srcTop = $(document).scrollTop() + ($(window).height() / 4),
                    pos;
                if(srcTop < section.about) {
                    pos = 'header';
                } else if (srcTop >= section.about && srcTop < section.news) {
                    pos = 'about';
                } else if (srcTop >= section.news && srcTop < section.gallery) {
                    pos = 'news';
                } else if (srcTop >= section.gallery && srcTop < section.map) {
                    pos = 'gallery';
                } else if (srcTop >= section.map && srcTop < section.contact) {
                    pos = 'map';
                } else if (srcTop >= section.contact) {
                    pos = 'contact';
                }  else {
                    pos = 'else';
                }

                $('.fixed-nav').find('.active').removeClass('active');
                $('.fixed-nav').find(`a[data-menu=${pos}]`).addClass('active');               

            });
           
        });

        $('.slider__item').fancybox({
            buttons: [
                // "zoom",
                //"share",
                // "slideShow",
                "fullScreen",
                "download",
                "thumbs",
                "close"
              ],
              animationEffect: "zoom-in-out",
              animationDuration: 1000,
              transitionEffect: "circular",              
              loop: true,
        });

    });
})(jQuery);