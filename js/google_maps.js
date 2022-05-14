// api key AIzaSyBAe61TXsos3WoHRtNTdlhkGJiwkeKSRak 24.804208, -107.466352
// Initialize and add the map
function iniciarMapa(){

    const coord = { lat: 24.804208, lng: -107.466352 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 14,
        center: coord,
      }
    );
    
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: coord,
      map: map,
    });
}