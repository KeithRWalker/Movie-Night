import firebase from 'firebase/app';
import 'firebase/auth';

import userMovieData from '../../helpers/data/userMovieData';
import allMovies from '../movies/movies';

const displayAllMoviesFromUser = () => {
  const allMoviesLink = document.getElementById('moviesLink');
  const formCon = document.getElementById('formCon');
  formCon.classList.add('hide');
  allMoviesLink.addEventListener('click', allMovies.displayMovies);
};

const displayUserMovies = () => {
  displayAllMoviesFromUser();
  const user = firebase.auth().currentUser.uid;
  userMovieData.loadUserMovies(user)
    .then((resp) => { allMovies.movieBuild(resp); })
    .catch(err => console.error(err, 'err from displayUserMovies'));
};

export default { displayUserMovies };
