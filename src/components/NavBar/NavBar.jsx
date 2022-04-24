import React from "react";
import { NavLink } from "react-router-dom";

import "./navBar.sass";

function NavBar() {
  return (
    <div className="NavBar_container">
      <nav className="NavBar">
        <NavLink to="/CreateReview" className="NavBar_item">
          <div className="NavBar_img">
            <img src="./create_review_icon.png" alt="create_review" />
          </div>
          <p className="NavBar_title">Create Review</p>
        </NavLink>
        <NavLink to="/Hotels" className="NavBar_item">
          <div className="NavBar_img">
            <img src="./main_page_icon.png" alt="main_page" />
          </div>
          <p className="NavBar_title">Reviews</p>
        </NavLink>
        <NavLink to="/MyAccount" className="NavBar_item">
          <div className="NavBar_img">
            <img src="./my_account_icon.png" alt="my_account" />
          </div>
          <p className="NavBar_title">My account</p>
        </NavLink>
      </nav>
      ;
    </div>
  );
}

export default NavBar;
