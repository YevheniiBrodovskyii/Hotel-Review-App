import "./navBar.sass";

function NavBar() {
  return (
    <div className="NavBar_container">
      <nav className="NavBar">
        <a href="#" className="NavBar_item">
          <div className="NavBar_img">
            <img src="./create_review_icon.png" alt="create_review" />
          </div>
          <p className="NavBar_title">Create Review</p>
        </a>
        <a href="#" className="NavBar_item">
          <div className="NavBar_img">
            <img src="./main_page_icon.png" alt="main_page" />
          </div>
          <p className="NavBar_title">Reviews</p>
        </a>
        <a href="#" className="NavBar_item">
          <div className="NavBar_img">
            <img src="./my_account_icon.png" alt="main_page" />
          </div>
          <p className="NavBar_title">My account</p>
        </a>
      </nav>
      ;
    </div>
  );
}

export default NavBar;
