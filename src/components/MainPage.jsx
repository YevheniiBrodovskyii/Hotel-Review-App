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
import { authenticate, fetchHotels } from "../index";
import { connect } from "react-redux";
function MainPage({ isauth, hotels }) {
  async function saveHotels() {
    const _hotels = [];
    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      _hotels.push(doc.data());
    });
    console.log("Data is fetched!");
    fetchHotels(_hotels);
  }

  useEffect(() => {
    saveHotels();
  }, []);

  function isAuthenticated() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authenticate(user, false);
        console.log("User is signed in");
      } else {
        authenticate(null, false);
        console.log("User is signed out");
      }
    });
  }

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      {isauth ? (
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
const mapStateToProps = (state) => ({
  isauth: state.authenticated,
  hotels: state.hotels,
});
export default connect(mapStateToProps)(MainPage);
