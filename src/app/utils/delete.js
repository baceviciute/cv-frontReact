import {API_DOMAIN} from "./constants";

export const deleteContact = (url, id) => {
  return fetch(`${API_DOMAIN}${url}${id}`,
  {method: 'DELETE'}
).then(response => response.json());
}
