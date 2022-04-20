import Hotels from "../Hotels/Hotels";
import { connect } from "react-redux";
import "./signUpPage.sass";
import {
  toSignUp,
  showSignUpError,
  signUp,
  setSignUpLogin,
  setSignUpPassword,
  setSignUpPassword2,
} from "../../index";

function SignUpPage(props) {
  const { isSignUp, error, singUpLogin, singUpPassword, singUpPassword2 } =
    props;

  function hideErrorAndBack() {
    toSignUp(false);
    showSignUpError(false);
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
                value={singUpLogin}
                onInput={(e) => setSignUpLogin(e.target.value)}
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
                value={singUpPassword}
                onInput={(e) => setSignUpPassword(e.target.value)}
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
                value={singUpPassword2}
                onInput={(e) => setSignUpPassword2(e.target.value)}
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
  error: state.errorSignUp,
  singUpLogin: state.singUpLogin,
  singUpPassword: state.singUpPassword,
  singUpPassword2: state.singUpPassword2,
});
export default connect(mapStateToProps)(SignUpPage);
