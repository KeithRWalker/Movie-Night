import firebase from 'firebase/app';
import 'firebase/auth';

import allMovies from '../../components/movies/movies';
import addMovie from '../../components/addMovie/addMovie';
import userMovies from '../../components/userMovies/userMovies';

const login = document.getElementById('login');
const logout = document.getElementById('logout');
const moviesLink = document.getElementById('moviesLink');
const moviesHeader = document.getElementById('moviesHeader');
const moviesCon = document.getElementById('moviesCon');
const formCon = document.getElementById('formCon');
const addNewMovieBtn = document.getElementById('addNewMovie');
const userMoviesLink = document.getElementById('userMoviesLink');
const addMoviesLink = document.getElementById('addMoviesLink');
const watchlistLink = document.getElementById('watchlistLink');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.error('logged in');
      login.classList.add('hide');
      moviesCon.classList.add('movie-movies-con');
      logout.classList.remove('hide');
      moviesLink.classList.remove('hide');
      moviesHeader.classList.remove('hide');
      userMoviesLink.classList.remove('hide');
      watchlistLink.classList.remove('hide');
      moviesCon.classList.remove('hide');
      formCon.classList.remove('hide');
      addMoviesLink.classList.remove('hide');
      logout.addEventListener('click', () => {
        firebase.auth().signOut();
      });
      addNewMovieBtn.addEventListener('click', addMovie.addNewMovie);
      userMoviesLink.addEventListener('click', userMovies.displayUserMovies);
      watchlistLink.addEventListener('click', allMovies.displayWatchlist);
      allMovies.displayMovies();
    } else {
      console.error('logged out');
      formCon.classList.add('hide');
      logout.classList.add('hide');
      moviesLink.classList.add('hide');
      moviesHeader.classList.add('hide');
      moviesCon.classList.add('hide');
      addMoviesLink.classList.add('hide');
      userMoviesLink.classList.add('hide');
      watchlistLink.classList.add('hide');
      login.classList.remove('hide');
      moviesCon.classList.remove('movie-movies-con');
    }
  });
};

export default { checkLoginStatus };
