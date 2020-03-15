import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/polylines/";

export function getPolylines() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savePolyline(polyline) {
  return fetch(baseUrl + (polyline.id || ""), {
    method: polyline.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(polyline)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePolyline(polylineId) {
  return fetch(baseUrl + polylineId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
