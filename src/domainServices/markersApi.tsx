import { handleResponse, handleError } from "./apiUtils";
import { URL } from "./env"

const baseUrl = URL + "/markers/";

export function getMarkers() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveMarker(marker: { id: any; }) {
  return fetch(baseUrl + (marker.id || ""), {
    method: marker.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(marker)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMarker(markerId: string) {
  return fetch(baseUrl + markerId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
