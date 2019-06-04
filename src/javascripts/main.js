import firebase from 'firebase/app';

import auth from './components/auth/auth';

import authData from './helpers/data/authData';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.authBuild();
  authData.checkLoginStatus();
};

init();
