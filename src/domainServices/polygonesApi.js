import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/polygons/";

export function getPolygons() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savePolygon(polygon) {
  return fetch(baseUrl + (polygon.id || ""), {
    method: polygon.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(polygon)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePolygon(polygonId) {
  return fetch(baseUrl + polygonId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
