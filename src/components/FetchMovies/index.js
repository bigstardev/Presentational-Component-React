const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17`;

export const fetchMovies = () =>
    fetch(API_URL).then((response) => response.json());
