import util from '../../helpers/util';

import movieData from '../../helpers/data/movieData';

const movieBuild = (array) => {
  let st = '';
  array.forEach((movie) => {
    st += `<div id="${movie.id}" class="card">`;
    st += `<h1>${movie.title}</h1>`;
    st += `<img src="${movie.img}">`;
    st += `<h4>${movie.contentRating}</h4>`;
    st += '<button class="add-movie-btn btn btn-danger">Add To Collection</button>';
    st += '<button class="rate-movie-btn btn btn-danger">Rate This Movie</button>';
    st += '</div>';
  });
  util.printToDom('moviesCon', st);
};

const displayMovies = () => {
  movieData.getDatabase()
    .then((resp) => {
      const movies = resp;
      const movieAr = [];
      Object.keys(movies).forEach((movie) => {
        movieAr.push(movies[movie]);
      });
      movieBuild(movieAr);
    })
    .catch(err => console.error(err));
};

export default { displayMovies };
