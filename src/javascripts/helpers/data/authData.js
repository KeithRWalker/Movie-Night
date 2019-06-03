import firebase from 'firebase/app';
import 'firebase/auth';

import listeners from '../listeners';

const login = document.getElementById('login');
const logout = document.getElementById('logout');
const moviesLink = document.getElementById('moviesLink');
const moviesHeader = document.getElementById('moviesHeader');
const moviesCon = document.getElementById('moviesCon');
const formCon = document.getElementById('formCon');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.error('logged in');
      login.classList.add('hide');
      logout.classList.remove('hide');
      moviesLink.classList.remove('hide');
      moviesHeader.classList.remove('hide');
      moviesCon.classList.remove('hide');
      formCon.classList.remove('hide');
      listeners.addListeners();
    } else {
      console.error('logged out');
      login.classList.remove('hide');
      logout.classList.add('hide');
      moviesLink.classList.add('hide');
      moviesHeader.classList.add('hide');
      moviesCon.classList.add('hide');
      formCon.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
