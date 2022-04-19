import "./myAccount.sass";
import { auth } from "../../firebaseConfig";
import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";

import { useEffect, useState } from "react";
import { Hotel } from "../Hotel/Hotel";

function MyAccount(props) {
  const { isauth } = props;
  const { hotels = [] } = props;
  const [userEmail, setUserEmail] = useState([]);

  function logout() {
    signOut(auth);
    isauth(false);
    console.log("Successful logout");
  }

  function userInfo() {
    onAuthStateChanged(auth, (user) => {
      console.log(`user info: ${user.email}"`);
      setUserEmail(user.email);
    });
  }
  useEffect(() => {
    userInfo();
  }, []);
  return (
    <div className="MyAccount">
      <h3 className="MyAccount_title">Hi, {userEmail}</h3>
      <div className="MyAccount_logout-container">
        <button className="MyAccount_logout" onClick={logout}>
          Logout...
        </button>
      </div>
      <hr className="MyAccount_hr" />
      <h4 className="MyAccount_subtitle">Your reviews:</h4>
      <div className="Hotels">
        {hotels.map((hotel) => (
          <Hotel
            {...hotel[1]}
            key={hotel[0]}
            id={hotel[0]}
            userEmail={userEmail}
            filter={true}
            deleteBtn={true}
          />
        ))}
      </div>
    </div>
  );
}

export default MyAccount;
