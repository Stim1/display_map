export function initMap(): google.maps.Map {
  const lviv = { lat: 49.8397, lng: 24.0297 };
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 12,
    center: lviv,
    mapTypeId: "terrain", 
  });

  return map;
}
