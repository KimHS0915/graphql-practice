import { fetch } from "cross-fetch";

const LIST_URL = process.env.LIST_URL;
const DETAIL_URL = process.env.DETAIL_URL;
const SUGGESTIONS_URL = process.env.SUGGESTIONS_URL;

const getRequestUrl = (url) => {
  return `${url}?`;
};

const getResponseJSON = (url) => {
  return fetch(`${url}`).then((response) => response.json());
};

export const getMovies = (limit, page, rating, genre) => {
  let REQUEST_URL = getRequestUrl(LIST_URL);
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (page > 0) {
    REQUEST_URL += `&page=${page}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  if (genre) {
    REQUEST_URL += `&genre=${genre}`;
  }
  return getResponseJSON(REQUEST_URL).then((json) => json.data.movies);
};

export const getMovie = (id) => {
  let REQUEST_URL = getRequestUrl(DETAIL_URL);
  if (id > 0) {
    REQUEST_URL += `movie_id=${id}`;
  }
  return getResponseJSON(REQUEST_URL).then((json) => json.data.movie);
};

export const getSuggestions = (id) => {
  let REQUEST_URL = getRequestUrl(SUGGESTIONS_URL);
  if (id > 0) {
    REQUEST_URL += `movie_id=${id}`;
  }
  return getResponseJSON(REQUEST_URL).then((json) => json.data.movies);
};
