import axios from 'axios';

import util from '../../helpers/util';

import movieData from '../../helpers/data/movieData';

import apiKeys from '../../helpers/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

let movieAr = [];

const deleteMovie = movieId => axios.delete(`${firebaseUrl}/movies/${movieId}.json`);

const deleteMovieEvent = (e) => {
  e.preventDefault();
  const movieId = e.target.parentNode.id;
  console.error(movieId);
  deleteMovie(movieId).then(() => {
    displayMovies(); // eslint-disable-line no-use-before-define
  });
};

const movieBuild = (array) => {
  let st = '';
  array.forEach((movie) => {
    st += `<div id="${movie.id}" class="card movie-card col-3">`;
    st += `<img src="${movie.img}" class="movie-img">`;
    st += `<h5>${movie.title} (${movie.contentRating})</h5>`;
    st += '<button class="btn btn-danger delete-btn" type="button">Delete Movie</button>';
    st += '<button class="watchlist-btn btn btn-danger" id="watchListBtn">Add To Watchlist</button>';
    st += '</div>';
  });
  util.printToDom('moviesCon', st);
  const deleteBtns = document.getElementsByClassName('delete-btn');
  const watchlistBtns = document.getElementsByClassName('watchlist-btn');
  for (let i = 0; i < deleteBtns.length; i += 1) {
    deleteBtns[i].addEventListener('click', deleteMovieEvent);
    watchlistBtns[i].addEventListener('click', () => console.error(watchlistBtns[i].parentNode.id));
  }
};

const displayMovies = () => {
  movieAr = [];
  movieData.getDatabase()
    .then((resp) => {
      movieBuild(resp);
    })
    .catch(err => console.error(err));
};

export default { displayMovies, movieBuild, movieAr };
