import { fetch } from "cross-fetch";

const API_URL = process.env.API_URL;

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(`${REQUEST_URL}`)
    .then((response) => response.json())
    .then((json) => json.data.movies);
};
