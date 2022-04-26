import "./welcomePage.sass";
import SignUpPage from "../SignUpPage/SignUpPage";
import MainPage from "../MainPage";
import { connect } from "react-redux";
import { toSignUp } from "../../index";
import { auth } from "../../firebaseConfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { validEmail } from "../../regex";
import { authenticate } from "../../index";

function WelcomePage(props) {
  const { isauth, signUp } = props;
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorEmailEmpty, iserrorEmailEmpty] = useState(false);
  const [errorEmailValid, iserrorEmailValid] = useState(false);
  const [errorPasswordEmpty, iserrorPasswordEmpty] = useState(false);
  const [errorAuth, setErrorAuth] = useState(false);

  function signUpClick() {
    iserrorEmailValid(false);
    iserrorEmailEmpty(false);
    iserrorPasswordEmpty(false);
    toSignUp(true);
  }
  function loginClick() {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        console.log("User logged in");
        authenticate(userCredential.user, true);
        setLoginEmail("");
        setLoginPassword("");
        setErrorAuth(false);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-email).") {
          setErrorAuth("User with that email was not found");
        } else if (error.message === "Firebase: Error (auth/internal-error).") {
          setErrorAuth("User with that email was not found");
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setErrorAuth("Invalid password!");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setErrorAuth("User not found");
        } else {
          setErrorAuth(false);
        }
        navigator.vibrate(1000);
        console.log("User logged out");
      });
  }
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        authenticate(user, true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorAuth("Account Exists with different credentials!");
        console.log(errorMessage);
      });
  }
  function loginWithFacebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        authenticate(user, true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorAuth("Account Exists with different credentials!");
        console.log(errorMessage);
      });
  }

  return (
    <div>
      {isauth ? (
        <MainPage />
      ) : (
        <div>
          {signUp ? (
            <SignUpPage />
          ) : (
            <div className="Welcome_page-container">
              <div className="Welcome_page-logo">
                <img src="./welcome-logo.svg" alt="welcome-logo" />
              </div>
              <div className="Welcome_page animate__animated animate__fadeIn">
                <h1 className="Welcome_page__title">Welcome to Hotel Review</h1>
                <h3 className="Welcome_page__subtitle">Sign in :</h3>
                <div className="Welcome_page__wrapper">
                  <label
                    className="Welcome_page__input-title"
                    htmlFor="welcome_mail"
                  >
                    E-mail:
                  </label>
                  <input
                    value={loginEmail}
                    onInput={(e) => {
                      if (e.target.value === "") {
                        iserrorEmailEmpty(true);
                      } else if (!validEmail.test(e.target.value)) {
                        iserrorEmailValid(true);
                        iserrorEmailEmpty(false);
                      } else {
                        iserrorEmailValid(false);
                        iserrorEmailEmpty(false);
                      }
                      setLoginEmail(e.target.value);
                    }}
                    onClick={() => {
                      iserrorEmailEmpty(true);
                    }}
                    className="Welcome_page__input"
                    id="welcome_mail"
                    type="email"
                    placeholder="Your e-mail..."
                  />
                  {errorEmailEmpty ? (
                    <div className="SignUp_error">Cant't be empty!</div>
                  ) : (
                    <></>
                  )}
                  {errorEmailValid ? (
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
                    value={loginPassword}
                    onInput={(e) => {
                      if (e.target.value.length < 6) {
                        iserrorPasswordEmpty(true);
                      } else {
                        iserrorPasswordEmpty(false);
                      }
                      setLoginPassword(e.target.value);
                    }}
                    onClick={() => {
                      iserrorPasswordEmpty(true);
                    }}
                    className="Welcome_page__input"
                    id="welcome_pass"
                    type="password"
                    placeholder="Your password..."
                  />
                  {errorPasswordEmpty ? (
                    <div className="SignUp_error">
                      Password must contain more that 6 symbols!
                    </div>
                  ) : (
                    <></>
                  )}
                  {errorAuth ? (
                    <div className="SignUp_error">{errorAuth}</div>
                  ) : (
                    <></>
                  )}
                  <button className="Welcome_page__btn" onClick={loginClick}>
                    Login
                  </button>
                  <button className="Welcome_page__btn" onClick={signUpClick}>
                    Sign Up
                  </button>
                  <div className="Welcome_page-choice">
                    <h6 className="Welcome_page-choice_title">Or use</h6>
                    <div className="Welcome_page-choice__wrapper">
                      <button
                        className="Welcome_page-choice_btn"
                        onClick={loginWithGoogle}
                      >
                        <img
                          className="Welcome_page__btn-clear--img"
                          src="./google_icon.svg"
                          alt="google_login"
                        />
                      </button>
                      <button
                        className="Welcome_page-choice_btn"
                        onClick={loginWithFacebook}
                      >
                        <img
                          className="Welcome_page__btn-clear--img"
                          src="./facebook_icon.svg"
                          alt="facebook_login"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  isauth: state.authenticated,
  signUp: state.signUp,
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});
export default connect(mapStateToProps)(WelcomePage);
