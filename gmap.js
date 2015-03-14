
var map;
function initialize() {
  var mapDiv = document.getElementById('map_canvas');
  if(!mapDiv){
  	alert("No es posible cargar el mapa ya que no se encuentra su div contenedor");
  	return
  }

   var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(mapDiv,
      mapOptions);


  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Ubicación encontrada usando HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      noHayGeolocalizacion(true);
    });
  } else {
    // Tu explorador no soporta Geolocalización.
    noHayGeolocalizacion(false);
  }
}


function noHayGeolocalizacion(errorFlag) {
  if (errorFlag) {
    var content = 'Error: Falló el Servicio de Geolocalización.';
  } else {
    var content = 'Error: Tu explorador no soporta geolocalizacion.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(25.6488126,-100.3030789),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}


google.maps.event.addDomListener(window, 'load', initialize);