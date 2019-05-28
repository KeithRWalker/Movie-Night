import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';

import loginBtn from './googleLogin.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authBuild = () => {
  let movieSt = '<button id="loginBtn" class="btn login-btn" type="button">';
  movieSt += `<img src="${loginBtn}" class="login-img">`;
  movieSt += '</button>';
  util.printToDom('nav', movieSt);
  document.getElementById('loginBtn').addEventListener('click', signMeIn);
};

export default { authBuild };
