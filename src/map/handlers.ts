import { deleteSelectedMarker, hideMarkers, showMarkers, deleteMarkers } from './markerManager';

export function setupUIHandlers(map: google.maps.Map, markers: google.maps.Marker[]): void {
  const deleteSelectedBtn = document.getElementById("delete-selected-marker");
  if (deleteSelectedBtn) {
    deleteSelectedBtn.addEventListener("click", () => deleteSelectedMarker(markers));
  }

  const showMarkersBtn = document.getElementById("show-markers");
  if (showMarkersBtn) {
    showMarkersBtn.addEventListener("click", () => showMarkers(map, markers));
  }

  const hideMarkersBtn = document.getElementById("hide-markers");
  if (hideMarkersBtn) {
    hideMarkersBtn.addEventListener("click", () => hideMarkers(markers));
  }

  const deleteMarkersBtn = document.getElementById("delete-markers");
  if (deleteMarkersBtn) {
    deleteMarkersBtn.addEventListener("click", () => deleteMarkers(markers));
  }
}
