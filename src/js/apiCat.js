const API_KEY =
  'live_7EhzOvrcQiOP34Ssxt3r1NKgyRWxDp0wsO7Z59K5Rzxiho7J1lWcKqB8AnskAXqq';

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`;
  return fetch(url).then(res => res.json());
}

function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;
  return fetch(url).then(res => res.json());
}
export { fetchBreeds, fetchCatByBreed };
