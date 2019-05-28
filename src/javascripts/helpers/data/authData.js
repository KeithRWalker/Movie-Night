import firebase from 'firebase/app';
import 'firebase/auth';

const login = document.getElementById('login');
const logout = document.getElementById('logout');
const moviesLink = document.getElementById('moviesLink');
const moviesHeader = document.getElementById('moviesHeader');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.error('logged in');
      login.classList.add('hide');
      logout.classList.remove('hide');
      moviesLink.classList.remove('hide');
      moviesHeader.classList.remove('hide');
      logout.addEventListener('click', () => {
        firebase.auth().signOut();
        checkLoginStatus();
      });
    } else {
      console.error('logged out');
      login.classList.remove('hide');
      logout.classList.add('hide');
      moviesLink.classList.add('hide');
      moviesHeader.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
