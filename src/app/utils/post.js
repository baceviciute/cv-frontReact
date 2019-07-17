import {API_DOMAIN} from "./constants";


export const post = (url, request) => {
  return fetch(`${API_DOMAIN}${url}`,
  {
    body: JSON.stringify(request),
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'}
  }
  ).then(resp => resp.json());
}
