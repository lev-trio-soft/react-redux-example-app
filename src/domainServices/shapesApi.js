import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/shapes/";

export function getShapes() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
