import firebase from 'firebase/app';
import 'firebase/auth';

import axios from 'axios';

import apiKeys from '../../helpers/apiKeys.json';

import allMovies from '../allMovies/allMovies';


const addNewMovie = () => {
  const addMovieForm = document.getElementById('addMovieForm').value;
  const addMovieImg = document.getElementById('addMovieImg').value;
  const ratingSel = document.getElementById('ratingSel').value;
  const firebaseUrl = apiKeys.firebaseKeys.databaseURL;
  const user = firebase.auth().currentUser.uid;

  const newMovieAr = [];

  const newMovie = {
    id: `${addMovieForm}${user}`,
    title: `${addMovieForm}`,
    img: `${addMovieImg}`,
    contentRating: `${ratingSel}`,
  };
  newMovieAr.push(newMovie);
  allMovies.movieAr.push(newMovie);
  axios.post(`${firebaseUrl}/movies.json`, newMovie);
  allMovies.displayMovies();
};

export default { addNewMovie };
