import util from '../../helpers/util';

import movieData from '../../helpers/data/movieData';

let movieAr = [];

const movieBuild = (array) => {
  let st = '';
  array.forEach((movie) => {
    st += `<div id="${movie.id}" class="card movie-card col-3">`;
    st += `<img src="${movie.img}" class="movie-img">`;
    st += `<h5>${movie.title} (${movie.contentRating})</h5>`;
    st += '<button class="movie-card-btn add-movie-btn btn btn-danger">Add To Collection</button>';
    st += '<button class="movie-card-btn rate-movie-btn btn btn-danger">Rate This Movie</button>';
    st += '</div>';
  });
  util.printToDom('moviesCon', st);
};

const displayMovies = () => {
  movieAr = [];
  movieData.getDatabase()
    .then((resp) => {
      const movies = resp;
      Object.keys(movies).forEach((movie) => {
        movieAr.push(movies[movie]);
      });
      movieBuild(movieAr);
    })
    .catch(err => console.error(err));
};

export default { displayMovies, movieBuild, movieAr };
