
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
}

google.maps.event.addDomListener(window, 'load', initialize);