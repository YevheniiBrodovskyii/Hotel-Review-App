import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import store from  "./store";
import * as actions from "./components/actions/actions"
import { bindActionCreators } from 'redux';
import { db, auth  } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
} from "firebase/firestore/lite";


const container = document.getElementById('root');
const root = createRoot(container);
const {dispatch} = store;
const {authenticate, fetchHotels, toSignUp, toBack, toTakePhoto, createPhotoRef, choosePhoto, getGeoposition, isLoaded, setIsLoadedSearch} = bindActionCreators(actions, dispatch);

// Firebase Functions:
async function saveHotels() {
  const _hotels = [];
  const querySnapshot = await getDocs(collection(db, "reviews"));
  querySnapshot.forEach((doc) => {
    _hotels.push([doc.id, doc.data()]);
  });
  console.log("Data is fetched!");
  fetchHotels(_hotels);
  isLoaded(false);
}

// setInterval(() => {
//   saveHotels();
// }, 15000)

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

root.render(<Provider store={store}>
    <App />
  </Provider>);


serviceWorkerRegistration.register();
export {authenticate, fetchHotels, toSignUp, toBack, toTakePhoto, createPhotoRef, isLoaded, choosePhoto, getGeoposition,
    saveHotels, isAuthenticated, setIsLoadedSearch}


