import { handleResponse, handleError } from "./apiUtils.tsx";
const baseUrl = process.env["API_URL"] + "/authors/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
