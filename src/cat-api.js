import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_LwdZPWSBd249BTZ1XEE1Jnlhm43lImqBynqyOmF4YHvizwR0HqfldyOb8SwdBv5N';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(res => res.data);
}

export async function fetchCatByBreed(breedId) {
  return await axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data);
}
