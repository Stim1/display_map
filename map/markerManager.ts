import { addQuestToFirebase, updateQuestLocation } from '../firebase/firebaseService';

export function addMarker(
  map: google.maps.Map,
  position: google.maps.LatLng | google.maps.LatLngLiteral,
  markers: google.maps.Marker[]
): void {
  let positionData: google.maps.LatLngLiteral;

  if (position instanceof google.maps.LatLng) {
    positionData = position.toJSON();
  } else {
    positionData = position;
  }

  const marker = new google.maps.Marker({
    position,
    map,
    draggable: true,
    label: `${markers.length + 1}`,
  });

  marker.set('isSelected', false);

  const newQuestKey = addQuestToFirebase(positionData);
  if (newQuestKey) {
    marker.set('firebaseKey', newQuestKey);
    marker.addListener('dragend', function(event: { latLng: { lat: () => number; lng: () => number; }; }) {
      updateQuestLocation(newQuestKey, event.latLng.lat(), event.latLng.lng());
    });
  }

  marker.addListener("click", () => selectMarker(marker, markers));
  markers.push(marker);
}

function selectMarker(marker: google.maps.Marker, markers: google.maps.Marker[]): void {
  markers.forEach(m => {
    m.set('isSelected', false);
  });
  
  marker.set('isSelected', true);
}

export function deleteSelectedMarker(markers: google.maps.Marker[]): void {
  const selectedMarker = markers.find(marker => marker.get('isSelected') === true);
  if (selectedMarker) {
    selectedMarker.setMap(null);
    const index = markers.indexOf(selectedMarker);
    if (index > -1) {
      markers.splice(index, 1);
    }
  }
}

export function setMapOnAll(map: google.maps.Map | null, markers: google.maps.Marker[]): void {
  for (let marker of markers) {
    marker.setMap(map);
  }
}

export function hideMarkers(markers: google.maps.Marker[]): void {
  setMapOnAll(null, markers);
}

export function showMarkers(map: google.maps.Map, markers: google.maps.Marker[]): void {
  setMapOnAll(map, markers);
}

export function deleteMarkers(markers: google.maps.Marker[]): void {
  hideMarkers(markers);
  markers.length = 0;
}
