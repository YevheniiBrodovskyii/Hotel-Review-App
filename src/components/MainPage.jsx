import { useState, useEffect } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { firebaseConfig, app, db, auth } from "../firebaseConfig";

import { Hotels } from "./Hotels/Hotels";
import WelcomePage from "./WelcomePage/WelcomePage";
import NavBar from "./NavBar/NavBar";
import MyAccount from "./MyAccount/MyAccount";

function MainPage() {
  const [hotels, setHotels] = useState([]);
  const [authentication, setAuthentication] = useState(false);

  async function fetchHotels() {
    const _hotels = [];
    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      _hotels.push([doc.id, doc.data()]);
    });
    console.log("Data is fetched!");
    setHotels(_hotels);
  }

  useEffect(() => {
    fetchHotels();
  }, []);

  function isAuthenticated() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setAuthentication(true);
        console.log("User is signed in");
        return user;
      } else {
        setAuthentication(false);
        console.log("User is signed out");
      }
    });
  }

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div className="container">
      {authentication ? (
        <>
          {/* <NavBar />
          <Hotels hotels={hotels} /> */}
          <MyAccount hotels={hotels} isauth={setAuthentication} />
        </>
      ) : (
        <WelcomePage />
      )}
    </div>
  );
}

export default MainPage;
