// main.js
// Funciones de inicialización para los mapas de cada día (reemplaza 'TU_API_KEY_AQUI' por tu key real)

function initMapDia1() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lat: 40.758, lng: -73.985 } // Times Square
  });
  new google.maps.Marker({ position: { lat: 40.758, lng: -73.985 }, map, title: "Times Square" });
  new google.maps.Marker({ position: { lat: 40.785091, lng: -73.968285 }, map, title: "Central Park" });
  new google.maps.Marker({ position: { lat: 40.758740, lng: -73.978674 }, map, title: "Rockefeller Center" });
  new google.maps.Marker({ position: { lat: 40.775036, lng: -73.965239 }, map, title: "5th Ave" });
}

function initMapDia2() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lat: 40.7128, lng: -74.0060 } // Downtown
  });
  new google.maps.Marker({ position: { lat: 40.6892, lng: -74.0445 }, map, title: "Estatua de la Libertad" });
  new google.maps.Marker({ position: { lat: 40.7064, lng: -74.0094 }, map, title: "Wall Street" });
  new google.maps.Marker({ position: { lat: 40.7127, lng: -74.0134 }, map, title: "World Trade Center" });
}

function initMapDia3() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lat: 40.706, lng: -73.9969 } // Brooklyn Bridge
  });
  new google.maps.Marker({ position: { lat: 40.7061, lng: -73.9969 }, map, title: "Puente de Brooklyn" });
  new google.maps.Marker({ position: { lat: 40.7033, lng: -73.9881 }, map, title: "DUMBO" });
  new google.maps.Marker({ position: { lat: 40.748817, lng: -73.985428 }, map, title: "Empire State" });
  new google.maps.Marker({ position: { lat: 40.747993, lng: -74.004765 }, map, title: "High Line" });
}