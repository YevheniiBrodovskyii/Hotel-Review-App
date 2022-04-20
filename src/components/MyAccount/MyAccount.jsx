import "./myAccount.sass";
import { logout } from "../../index";

function MyAccount() {
  return (
    <div className="MyAccount">
      <h3 className="MyAccount_title">Hi, *USERNAME*</h3>
      <div className="MyAccount_logout-container">
        <button className="MyAccount_logout" onClick={logout}>
          Logout...
        </button>
      </div>
      <hr className="MyAccount_hr" />
      <h4 className="MyAccount_subtitle">Your reviews:</h4>
    </div>
  );
}

export default MyAccount;
