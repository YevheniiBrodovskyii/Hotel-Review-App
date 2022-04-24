import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import store from  "./store";
import * as actions from "./components/actions/actions"
import { bindActionCreators } from 'redux';
import { db, auth, storage  } from "./firebaseConfig";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc, 
  addDoc
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import {
  uploadBytes,
  ref
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-storage.js";

const container = document.getElementById('root');
const root = createRoot(container);
const {dispatch} = store;
const {authenticate, fetchHotels, toSignUp, toBack, showMap, toTakePhoto, createPhotoRef, choosePhoto, getGeoposition, setHotelNameForm, setLatForm, setLongForm, setStarsForm, setReviewForm, 
 setSignUpLogin, setSignUpPassword, setSignUpPassword2, setLoginEmail, setLoginPassword, isLoaded} = bindActionCreators(actions, dispatch);

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

setInterval(() => {
  saveHotels();
}, 15000)

async function uploadPhoto(file, counter) {
  
  const storageRef = ref(storage, `hotel-image-${counter}`);
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
}

async function safeForm() {
  const hotelName = store.getState().hotelName
  const stars = store.getState().stars
  const lattitude = store.getState().lattitude
  const longitude = store.getState().longitude
  const review = store.getState().review
  const author = store.getState().user.email
  const photo = store.getState().photo ? (store.getState().photo) : (store.getState().photoRef)
  const querySnapshot = await getDocs(collection(db, "counter"));
  let counter = 0
  querySnapshot.forEach((doc) => {
    counter = doc.data().photo_count
  });
  await updateDoc(doc(db, 'counter', 'HU3Wfcb77M8r3f51qKeG'), {
    photo_count: counter+1
  });
  uploadPhoto(photo, counter)
  await addDoc(collection(db, "reviews"), {
    name: hotelName,
    img: `hotel-image-${counter}`,
    localization: {_lat: lattitude, _long: longitude},
    author: author,
    stars: stars,
    review: review
  })
  setHotelNameForm("")
  setReviewForm("")
  setLatForm(null)
  setLongForm(null)
  setStarsForm(null)
  choosePhoto(null)
  createPhotoRef(null)
  saveHotels()
}

async function deleteReview(id) {
  console.log(`Trying to delete object with id=${id}`);
  await deleteDoc(doc(db, "reviews", id));
  saveHotels();
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
  })
  .catch((error) => {
    navigator.vibrate(1000);
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
        navigator.vibrate(1000);
        const errorMessage = error.message;
        console.log(errorMessage);
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
export {authenticate, fetchHotels, toSignUp, toBack, logout, deleteReview,showMap, toTakePhoto, createPhotoRef, isLoaded, choosePhoto, getGeoposition, uploadPhoto, safeForm,
    saveHotels, isAuthenticated, signUp, setSignUpLogin, setSignUpPassword, setSignUpPassword2, setLoginEmail, setLoginPassword, loginClick, setHotelNameForm, setLatForm, setLongForm, setStarsForm, setReviewForm,}


