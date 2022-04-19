import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

import { Hotels } from "../Hotels/Hotels";

import "./signUpPage.sass";

function SignUpPage(props) {
  const { back } = props;
  const { isSignUp } = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [inputPass2, setInputPass2] = useState("");
  const [error, isError] = useState(false);

  function signUp() {
    if (inputPass === inputPass2 || inputPass !== "") {
      createUserWithEmailAndPassword(auth, inputEmail, inputPass)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          isError(true);
        });
    }
  }

  return (
    <div>
      {isSignUp ? (
        <Hotels />
      ) : (
        <div className="Welcome_page-container">
          <div className="Welcome_page animate__animated animate__fadeIn">
            <h1 className="Welcome_page__title">Welcome to Hotel Review </h1>
            <h3 className="Welcome_page__subtitle">Create an account :</h3>
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
                <div className="SignUp_error">Example : example@gmail.com</div>
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
                <div className="SignUp_error">Minimum length 6 charakters</div>
              ) : (
                <></>
              )}
              <label
                className="Welcome_page__input-title"
                htmlFor="welcome_pass"
              ></label>
              <input
                value={inputPass2}
                onInput={(e) => setInputPass2(e.target.value)}
                className="Welcome_page__input"
                id="welcome_pass_repeat"
                type="password"
                placeholder="Repeat password..."
              />
              {error ? (
                <div className="SignUp_error">
                  Please make sure you have entered the same password.
                </div>
              ) : (
                <></>
              )}
              <button
                className="Welcome_page__btn red"
                onClick={() => back(false)}
              >
                Back...
              </button>
              <button className="Welcome_page__btn" onClick={signUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUpPage;
