import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { db, auth } from "../firebaseConfig";

import Hotels from "./Hotels/Hotels";
import CreateReview from "./CreateReview/CreateReview";
import MyAccount from "./MyAccount/MyAccount";
import WelcomePage from "./WelcomePage/WelcomePage";
import NavBar from "./NavBar/NavBar";

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
    <div>
      {authentication ? (
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/CreateReview"
                element={<CreateReview />}
              ></Route>
              <Route
                index
                exact
                path="/Hotels"
                element={<Hotels hotels={hotels} />}
              ></Route>
              <Route exact path="/MyAccount" element={<MyAccount />}></Route>
              <Route path="*" element={<Hotels hotels={hotels} />} />
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <div className="container">
          <WelcomePage />
        </div>
      )}
    </div>
  );
}

export default MainPage;
