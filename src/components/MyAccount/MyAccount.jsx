import "./myAccount.sass";
import { authenticate } from "../../index";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";

import Hotels from "../Hotels/Hotels";

function MyAccount(props) {
  const { user, hotels } = props;
  // logout
  function logout() {
    signOut(auth);
    authenticate(null, false);
    console.log("Successful logout");
  }
  return (
    <div className="MyAccount animate__animated animate__fadeIn">
      <h3 className="MyAccount_title">Hi, {user.email}</h3>
      <div className="MyAccount_logout-container">
        <button className="MyAccount_logout" onClick={logout}>
          Logout...
        </button>
      </div>
      <hr className="MyAccount_hr" />
      <h4 className="MyAccount_subtitle">Your reviews:</h4>
      <Hotels hotels={hotels} filter={true} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
  hotels: state.hotels,
});
export default connect(mapStateToProps)(MyAccount);
