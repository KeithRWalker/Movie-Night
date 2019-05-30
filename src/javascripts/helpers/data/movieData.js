import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getDatabase = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((resp) => {
      resolve(resp.data);
    })
    .catch(err => reject(err));
});

export default { getDatabase };
