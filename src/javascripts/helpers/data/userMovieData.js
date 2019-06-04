import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const loadUserMovies = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((resp) => {
      const movies = resp.data;
      const userMoviesAr = [];
      Object.keys(movies).forEach((movieUid) => {
        if (movies[movieUid].uid === uid) {
          userMoviesAr.push(movies[movieUid]);
        }
      });
      resolve(userMoviesAr);
    }).catch(err => reject(err));
});

export default { loadUserMovies };
