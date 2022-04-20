import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hotels from "./Hotels/Hotels";
import CreateReview from "./CreateReview/CreateReview";
import MyAccount from "./MyAccount/MyAccount";
import WelcomePage from "./WelcomePage/WelcomePage";
import NavBar from "./NavBar/NavBar";
import { saveHotels, isAuthenticated } from "../index";
import { connect } from "react-redux";

function MainPage({ isauth, hotels }) {
  useEffect(() => {
    saveHotels();
  }, []);

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      {isauth ? (
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/CreateReview"
                element={<CreateReview />}
              ></Route>
              <Route
                index
                exact
                path="/Hotels"
                element={<Hotels hotels={hotels} />}
              ></Route>
              <Route exact path="/MyAccount" element={<MyAccount />}></Route>
              <Route path="*" element={<Hotels hotels={hotels} />} />
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <div className="container">
          <WelcomePage />
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  isauth: state.authenticated,
  hotels: state.hotels,
});
export default connect(mapStateToProps)(MainPage);
