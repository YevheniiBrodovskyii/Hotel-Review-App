import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import store from  "./store";
import * as actions from "./components/actions/actions"
import { bindActionCreators } from 'redux';
import { db, auth } from "./firebaseConfig";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

const container = document.getElementById('root');
const root = createRoot(container);
const {dispatch} = store;
const {authenticate, fetchHotels, toSignUp, toBack, 
  showSignUpError, showLoginError, setSignUpLogin, setSignUpPassword, setSignUpPassword2, setLoginEmail, setLoginPassword} = bindActionCreators(actions, dispatch);

// Firebase Functions:
async function saveHotels() {
  const _hotels = [];
  const querySnapshot = await getDocs(collection(db, "reviews"));
  querySnapshot.forEach((doc) => {
    _hotels.push(doc.data());
  });
  console.log("Data is fetched!");
  fetchHotels(_hotels);
}

function isAuthenticated() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      authenticate(user, true);
      console.log("User is signed in");
    } else {
      authenticate(null, false);
      console.log("User is signed out");
    }
  });
}

function loginClick() {
  let inputEmail = store.getState().loginEmail
  let inputPass = store.getState().loginPassword
  signInWithEmailAndPassword(auth, inputEmail, inputPass)
    .then((userCredential) => {
      console.log("User logged in");
      authenticate(userCredential.user, true);
      setLoginEmail("")
      setLoginPassword("")
      showLoginError(false)
  })
  .catch((error) => {
    showLoginError(true);
    console.log("User logged out");
  });
}

function signUp() {
  var inputEmail = store.getState().signUpLogin
  var inputPass = store.getState().signUpPassword
  var inputPass2 = store.getState().signUpPassword2
  if (inputPass === inputPass2 || inputPass !== "") {
    createUserWithEmailAndPassword(auth, inputEmail, inputPass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        authenticate(user, true);
        setSignUpLogin("")
        setSignUpPassword("")
        setSignUpPassword2("")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        showSignUpError(true);
      });
  }
}

function logout() {
  signOut(auth);
  authenticate(null, false);
  console.log("Successful logout");
}

root.render(<Provider store={store}>
    <App />
  </Provider>);


serviceWorkerRegistration.register();
export {authenticate, fetchHotels, toSignUp, toBack, showSignUpError, logout,
   showLoginError, saveHotels, isAuthenticated, signUp, setSignUpLogin, setSignUpPassword, setSignUpPassword2, setLoginEmail, setLoginPassword, loginClick}


