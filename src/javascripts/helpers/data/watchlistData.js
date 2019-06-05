import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const loadWatchlistMovies = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((resp) => {
      const movies = resp.data;
      const watchlistMov = [];
      Object.keys(movies).forEach((movie) => {
        if (movies[movie].wl === true) {
          watchlistMov.push(movies[movie]);
        }
      });
      resolve(watchlistMov);
    }).catch(err => reject(err));
});

export default { loadWatchlistMovies };
