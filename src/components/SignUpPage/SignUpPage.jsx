import Hotels from "../Hotels/Hotels";
import { connect } from "react-redux";
import "./signUpPage.sass";
import {
  toSignUp,
  signUp,
  setSignUpLogin,
  setSignUpPassword,
  setSignUpPassword2,
} from "../../index";

import { validEmail } from "../../regex";
import { useState } from "react";

function SignUpPage(props) {
  const { isSignUp, signUpLogin, signUpPassword, signUpPassword2 } = props;

  const [errorEmailEmpty, iserrorEmailEmpty] = useState(false);
  const [errorEmailValid, iserrorEmailValid] = useState(false);
  const [errorPasswordEmpty, iserrorPasswordEmpty] = useState(false);
  const [errorPasswordMatch, iserrorPasswordMatch] = useState(false);

  function hideErrorAndBack() {
    iserrorEmailValid(false);
    iserrorEmailEmpty(false);
    toSignUp(false);
  }
  return (
    <div>
      {isSignUp ? (
        <Hotels />
      ) : (
        <div className="Welcome_page-container">
          <div className="Welcome_page animate__animated animate__fadeInLeft">
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
                value={signUpLogin}
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
                  setSignUpLogin(e.target.value);
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
                <div className="SignUp_error">Can't be empty!</div>
              ) : (
                <></>
              )}
              {errorEmailValid ? (
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
                value={signUpPassword}
                onInput={(e) => {
                  if (e.target.value.length < 6) {
                    iserrorPasswordEmpty(true);
                  } else if (signUpPassword !== signUpPassword2) {
                    iserrorPasswordMatch(true);
                    iserrorPasswordEmpty(false);
                  } else {
                    iserrorPasswordMatch(false);
                    iserrorPasswordEmpty(false);
                  }
                  setSignUpPassword(e.target.value);
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
              <label
                className="Welcome_page__input-title"
                htmlFor="welcome_pass"
              ></label>
              <input
                value={signUpPassword2}
                onInput={(e) => {
                  if (signUpPassword === signUpPassword2) {
                    iserrorPasswordMatch(false);
                    console.log("Match");
                  } else {
                    iserrorPasswordMatch(true);
                    console.log("No Match");
                  }
                  setSignUpPassword2(e.target.value);
                }}
                className="Welcome_page__input"
                id="welcome_pass_repeat"
                type="password"
                placeholder="Repeat password..."
              />
              {errorPasswordMatch ? (
                <div className="SignUp_error">Passwords didn't match!</div>
              ) : (
                <></>
              )}
              <button
                className="Welcome_page__btn red"
                onClick={() => hideErrorAndBack()}
              >
                Back...
              </button>
              <button className="Welcome_page__btn" onClick={() => signUp()}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  isauth: state.authenticated,
  signUp: state.signUp,
  singUpLogin: state.signUpLogin,
  signUpPassword: state.signUpPassword,
  signUpPassword2: state.signUpPassword2,
});
export default connect(mapStateToProps)(SignUpPage);
