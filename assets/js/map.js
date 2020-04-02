function initMap() {
    var ireland = new google.maps.LatLng(53.305494, -7.737649);
    
    var locations = [
    [`<div class="infoContent">
        <h5>Copper Lab</h5>
        <p><img src="assets/images/coffee-icon.png" alt="Coffee Icon">91 Newry St, Banbridge BT32 3EF</p>
        <a href="https://goo.gl/maps/fUqGMN3HAFiPPxBr7" target="_blank">Get Directions</a>
    </div>`, 54.346834, -6.271724],
    [`<div class="infoContent">
        <h5>3FE</h5>
        <p><img src="assets/images/coffee-icon.png" alt="Coffee Icon">32-34 Grand Canal Street Lower, Grand Canal Dock, Dublin, Ireland</p>
        <a href="https://goo.gl/maps/yTSSqc6RAiHw1wft8" target="_blank">Get Directions</a>
    </div>`, 53.339959, -6.241968],
    [`<div class="infoContent">
        <h5>Established Coffee</h5>
        <p><img src="assets/images/coffee-icon.png" alt="Coffee Icon">54 Hill St, Belfast BT1 2LB</p>
        <a href="https://g.page/establishedcoffee?share" target="_blank">Get Directions</a>
    </div>`, 54.602635, -5.927208]
    ];

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var labelIndex = 0;
    
    var map = new google.maps.Map(document.getElementById('map'), {
          center: ireland,
          zoom: 7,
          disableDefaultUI: true,
          zoomControl: true,
          styles: [
          {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#93817c'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#a5b076'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#f5f1e6'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#f8c967'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#e9bc62'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#e98d58'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#db8555'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#806b63'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8f7d77'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }
        ]
    });


    var infowindow =  new google.maps.InfoWindow({maxWidth: 300});
    var marker, count;

    for (count = 0; count < locations.length; count++) {
       marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      label: labels[labelIndex++ % labels.length],
      title: locations[count][0]
    });

    google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));


    // zoom for 3 sec when clicked on marker
    google.maps.event.addListener(marker,'click',function() {
        var pos = map.getZoom();
        map.setZoom(10);
        map.setCenter(marker.getPosition());
    //window.setTimeout(function() {map.setZoom(pos);},3000);
    });
  }

   /* set marker to bounce when clicked
    google.maps.event.addListener(marker,'mouseover',function() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    });*/

}
google.maps.event.addDomListener(window, 'resize', initMap);
google.maps.event.addDomListener(window, 'load', initMap);



   