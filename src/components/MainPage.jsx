import { useState, useEffect } from "react";

import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { db, auth } from "../firebaseConfig";

import { Hotels } from "./Hotels/Hotels";
import WelcomePage from "./WelcomePage/WelcomePage";
import NavBar from "./NavBar/NavBar";
import CreateReview from "./CreateReview/CreateReview";

function MainPage() {
  const [hotels, setHotels] = useState([]);
  const [authentication, setAuthentication] = useState(false);

  async function fetchHotels() {
    const _hotels = [];
    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      _hotels.push(doc.data());
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
        setAuthentication(true);
        console.log("User is signed in");
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
          <NavBar />
          {/* <Hotels hotels={hotels} /> */}
          <CreateReview />
        </>
      ) : (
        <WelcomePage />
      )}
    </div>
  );
}

export default MainPage;
