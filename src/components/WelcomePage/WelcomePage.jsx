import { useState } from "react";
import "./welcomePage.sass";

import SignUpPage from "../SignUpPage/SignUpPage";
import MainPage from "../MainPage";
import { auth } from "../../firebaseConfig";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

function WelcomePage() {
  const [signUp, toSignUp] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [authenticated, isAuthenticated] = useState(false);
  const [error, isError] = useState(false);

  function signUpClick() {
    toSignUp(true);
  }

  function loginClick() {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        console.log("User logged in");
        isAuthenticated(true);
      } else {
        signInWithEmailAndPassword(auth, inputEmail, inputPass);
        isError(true);
        console.log("User logged out");
      }
    });
  }

  return (
    <div>
      {authenticated ? (
        <MainPage />
      ) : (
        <div>
          {signUp ? (
            <SignUpPage isOpen={toSignUp} back={toSignUp} />
          ) : (
            <div className="Welcome_page-container">
              <div className="Welcome_page animate__animated animate__fadeIn">
                <h1 className="Welcome_page__title">
                  Welcome to Hotel Review{" "}
                </h1>
                <h3 className="Welcome_page__subtitle">Sign in :</h3>
                <div className="Welcome_page__wrapper">
                  <label
                    className="Welcome_page__input-title"
                    htmlFor="welcome_mail"
                  >
                    E-mail:
                  </label>
                  <input
                    value={inputEmail}
                    onInput={(e) => setInputEmail(e.target.value)}
                    className="Welcome_page__input"
                    id="welcome_mail"
                    type="email"
                    placeholder="Your e-mail..."
                  />
                  {error ? (
                    <div className="SignUp_error">
                      Example : example@gmail.com
                    </div>
                  ) : (
                    <></>
                  )}
                  <label
                    className="Welcome_page__input-title"
                    htmlFor="welcome_pass"
                  >
                    Password:
                  </label>
                  <input
                    value={inputPass}
                    onInput={(e) => setInputPass(e.target.value)}
                    className="Welcome_page__input"
                    id="welcome_pass"
                    type="password"
                    placeholder="Your password..."
                  />
                  {error ? (
                    <div className="SignUp_error">Invalid password</div>
                  ) : (
                    <></>
                  )}
                  <button className="Welcome_page__btn" onClick={loginClick}>
                    Login
                  </button>
                  <button className="Welcome_page__btn" onClick={signUpClick}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WelcomePage;
