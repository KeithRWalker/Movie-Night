import axios from 'axios';

import util from '../../helpers/util';

import movieData from '../../helpers/data/movieData';
import wlMovieData from '../../helpers/data/watchlistData';

import apiKeys from '../../helpers/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const deleteMovie = movieId => axios.delete(`${firebaseUrl}/movies/${movieId}.json`);

const deleteMovieEvent = (e) => {
  e.preventDefault();
  const movieId = e.target.parentNode.id;
  console.error(movieId);
  deleteMovie(movieId).then(() => {
    displayMovies(); // eslint-disable-line no-use-before-define
  });
};

const watchlistMovie = (e) => {
  e.preventDefault();
  const movId = e.target.parentNode.id;
  const obj = { wl: true };
  axios.patch(`${firebaseUrl}/movies/${movId}.json`, obj);
};

const movieBuild = (array) => {
  let st = '';
  array.forEach((movie) => {
    st += `<div id="${movie.id}_con" class="card movie-card col-3">`;
    st += `<img src="${movie.img}" class="movie-img">`;
    st += `<h5>${movie.title} (${movie.contentRating})</h5>`;
    st += '<div class="dropdown">';
    st += `<button class="btn btn-secondary dropdown-toggle" type="button" id="${movie.id}_drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
    st += 'Options';
    st += '</button>';
    st += `<div class="dropdown-menu" aria-labelledby="${movie.id}_drop" id="${movie.id}">`;
    st += '<button class="dropdown-item btn btn-danger delete-btn" type="button">Delete Movie</button>';
    st += '<button class="dropdown-item btn btn-danger watchlist-btn" id="watchListBtn">Add To Watchlist</button>';
    st += '<button class="dropdown-item btn btn-danger rating-btn" type="button">Rate</button>';
    st += '</div>';
    st += '</div>';
    st += '</div>';
  });
  util.printToDom('moviesCon', st);
  const deleteBtns = document.getElementsByClassName('delete-btn');
  const watchlistBtns = document.getElementsByClassName('watchlist-btn');
  for (let i = 0; i < deleteBtns.length; i += 1) {
    deleteBtns[i].addEventListener('click', deleteMovieEvent);
    watchlistBtns[i].addEventListener('click', watchlistMovie);
  }
};

const displayMovies = () => {
  movieData.getDatabase()
    .then(resp => movieBuild(resp))
    .catch(err => console.error(err));
};

const displayWatchlist = () => {
  wlMovieData.loadWatchlistMovies()
    .then(resp => movieBuild(resp))
    .catch(err => console.error(err));
};

export default { displayMovies, movieBuild, displayWatchlist };
