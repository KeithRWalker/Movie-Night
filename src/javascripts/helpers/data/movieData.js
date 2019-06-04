import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getDatabase = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((resp) => {
      const movies = resp.data;
      const moviesAr = [];
      Object.keys(movies).forEach((movieId) => {
        movies[movieId].id = movieId;
        moviesAr.push(movies[movieId]);
      });
      resolve(moviesAr);
    })
    .catch(err => reject(err));
});

export default { getDatabase };
