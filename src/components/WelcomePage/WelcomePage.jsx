import "./welcomePage.sass";
import SignUpPage from "../SignUpPage/SignUpPage";
import MainPage from "../MainPage";
import { connect } from "react-redux";
import {
  toSignUp,
  showLoginError,
  setLoginEmail,
  setLoginPassword,
  loginClick,
} from "../../index";

function WelcomePage(props) {
  const { isauth, signUp, error, loginEmail, loginPassword } = props;

  function signUpClick() {
    showLoginError(false);
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
                    onInput={(e) => setLoginEmail(e.target.value)}
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
                    value={loginPassword}
                    onInput={(e) => setLoginPassword(e.target.value)}
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
const mapStateToProps = (state) => ({
  isauth: state.authenticated,
  signUp: state.signUp,
  error: state.errorLogin,
  loginEmail: state.loginEmail,
  loginPassword: state.loginPassword,
});
export default connect(mapStateToProps)(WelcomePage);
