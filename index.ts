import { initMap } from './map/mapInitialization';
import { addMarker } from './map/markerManager';
import { setupUIHandlers } from './map/handlers';

let map: google.maps.Map;
let markers: google.maps.Marker[] = [];

function main() {
  map = initMap();
  setupUIHandlers(map, markers);

  map.addListener("click", (event: google.maps.MapMouseEvent) => {
    addMarker(map, event.latLng!, markers);
  });
}

window.initMap = main;
