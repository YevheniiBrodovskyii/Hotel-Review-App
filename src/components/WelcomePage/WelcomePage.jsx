import "./welcomePage.sass";
import SignUpPage from "../SignUpPage/SignUpPage";
import MainPage from "../MainPage";
import { connect } from "react-redux";
import {
  toSignUp,
  setLoginEmail,
  setLoginPassword,
  loginClick,
} from "../../index";
import { useState } from "react";
import { validEmail } from "../../regex";

function WelcomePage(props) {
  const { isauth, signUp, loginEmail, loginPassword } = props;

  const [errorEmailEmpty, iserrorEmailEmpty] = useState(false);
  const [errorEmailValid, iserrorEmailValid] = useState(false);
  const [errorPasswordEmpty, iserrorPasswordEmpty] = useState(false);

  function signUpClick() {
    iserrorEmailValid(false);
    iserrorEmailEmpty(false);
    iserrorPasswordEmpty(false);
    toSignUp(true);
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
const mapStateToProps = (state) => ({
  isauth: state.authenticated,
  signUp: state.signUp,
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});
export default connect(mapStateToProps)(WelcomePage);
