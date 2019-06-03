import firebase from 'firebase/app';
import 'firebase/auth';

import addMovie from '../components/addMovie/addMovie';

const addListeners = () => {
  const logout = document.getElementById('logout');
  const addNewMovieBtn = document.getElementById('addNewMovie');

  logout.addEventListener('click', () => {
    firebase.auth().signOut();
  });
  addNewMovieBtn.addEventListener('click', addMovie.addNewMovie);
};

export default { addListeners };
