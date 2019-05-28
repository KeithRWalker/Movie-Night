import firebase from 'firebase/app';

import auth from './components/auth/auth';
import navbar from './components/navbar/navbar';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navbar.navBuild();
  auth.authBuild();
};

init();
