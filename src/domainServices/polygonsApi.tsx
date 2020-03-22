import { handleResponse, handleError } from "./apiUtils";
import { URL } from "./env"

const baseUrl = URL + "/polygons/";

export function getPolygons() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savePolygon(polygon: { id: any; }) {
  return fetch(baseUrl + (polygon.id || ""), {
    method: polygon.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(polygon)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePolygon(polygonId: string) {
  return fetch(baseUrl + polygonId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
