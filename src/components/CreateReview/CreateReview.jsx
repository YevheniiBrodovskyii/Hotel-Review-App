import "./createReview.sass";
import { toTakePhoto, safeForm } from "../..";
import TakePhoto from "../TakePhoto/TakePhoto";
import { connect } from "react-redux";
import {
  choosePhoto,
  setHotelNameForm,
  setLatForm,
  setLongForm,
  setStarsForm,
  setReviewForm,
} from "../..";
import { validSymbols } from "../../regex";
import { useState } from "react";

function CreateReview(props) {
  const {
    toPhoto,
    photoRef,
    photoIsChosen,
    lattitude,
    longitude,
    review,
    hotelName,
  } = props;

  const [errorNameSymbols, isErrorNameSymbols] = useState(false);
  const [errorReviewSymbols, isErrorReviewSymbols] = useState(false);
  const [errorNameEmpty, isErrorNameEmpty] = useState(false);
  const [errorReviewEmpty, isErrorReviewEmpty] = useState(false);

  function takeGeoposition() {
    navigator.geolocation.getCurrentPosition(success, error);
    function success(pos) {
      let crd = pos.coords;

      // getGeoposition([crd.latitude, crd.longitude]);
      setLatForm(crd.latitude);
      setLongForm(crd.longitude);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }
  takeGeoposition();

  return (
    <div>
      {toPhoto ? (
        <TakePhoto />
      ) : (
        <div className="Create_card animate__animated animate__fadeIn ">
          <h2 className="Create_card-title">Tell us about...</h2>
          <hr className="Create_card-hr" />
          <form action="" className="Create_card-form" id="createReviewForm">
            <input
              className="Create_card-input"
              type="text"
              value={hotelName}
              placeholder="Name of Hotel"
              onInput={(e) => {
                if (e.target.value === "") {
                  isErrorNameEmpty(true);
                } else if (!validSymbols.test(e.target.value)) {
                  isErrorNameSymbols(true);
                  isErrorNameEmpty(false);
                } else {
                  isErrorNameEmpty(false);
                  isErrorNameSymbols(false);
                }
                setHotelNameForm(e.target.value);
              }}
              onClick={() => {
                isErrorNameEmpty(true);
              }}
            />
            {errorNameEmpty ? (
              <div className="Create_card_error">
                Hotel name can't be empty!
              </div>
            ) : (
              <></>
            )}
            {errorNameSymbols ? (
              <div className="Create_card_error">
                Hotel name can't contain symbols!
              </div>
            ) : (
              <></>
            )}
            {photoRef ? (
              <div className="Create_card-input--photo">
                <i class="fa fa-check fa-check-cr fa-xl" aria-hidden="true"></i>
              </div>
            ) : (
              <div className="Create_card-input--photo">
                <input
                  type="file"
                  placeholder="Upload Photo"
                  onInput={(e) => {
                    choosePhoto(e.target.files[0]);
                  }}
                />
              </div>
            )}
            {photoIsChosen ? (
              <i class="fa fa-check fa-check-cr-2 fa-xl" aria-hidden="true"></i>
            ) : (
              <button
                className="Create_card_upload"
                onClick={() => toTakePhoto(true)}
                type="button"
              >
                Take a Photo
              </button>
            )}
            <div className="Create_card-location--container">
              <input
                className="Create_card-input Create_card-location "
                type="number"
                placeholder="Long"
                value={longitude ? longitude : ""}
                onInput={(e) => {
                  setLongForm(e.target.value);
                }}
              />
              <input
                className="Create_card-input Create_card-location--2"
                type="number"
                placeholder="Latt"
                value={lattitude ? lattitude : ""}
                onInput={(e) => {
                  setLatForm(e.target.value);
                }}
              />
            </div>
            <div className="Create_card-stars">
              <input
                type="radio"
                id="star-5"
                name="rating"
                value="5"
                onInput={(e) => {
                  setStarsForm(parseInt(e.target.value));
                }}
              />
              <label htmlFor="star-5" title="Оценка «5»"></label>
              <input
                type="radio"
                id="star-4"
                name="rating"
                value="4"
                onInput={(e) => {
                  setStarsForm(parseInt(e.target.value));
                }}
              />
              <label htmlFor="star-4" title="Оценка «4»"></label>
              <input
                type="radio"
                id="star-3"
                name="rating"
                value="3"
                onInput={(e) => {
                  setStarsForm(parseInt(e.target.value));
                }}
              />
              <label htmlFor="star-3" title="Оценка «3»"></label>
              <input
                type="radio"
                id="star-2"
                name="rating"
                value="2"
                onInput={(e) => {
                  setStarsForm(parseInt(e.target.value));
                }}
              />
              <label htmlFor="star-2" title="Оценка «2»"></label>
              <input
                type="radio"
                id="star-1"
                name="rating"
                value="1"
                onInput={(e) => {
                  setStarsForm(parseInt(e.target.value));
                }}
              />
              <label htmlFor="star-1" title="Оценка «1»"></label>
            </div>
            <input
              className="Create_card-input Create_card-review"
              type="text"
              value={review}
              placeholder="Describe the Hotel"
              onInput={(e) => {
                if (e.target.value === "") {
                  isErrorReviewEmpty(true);
                } else if (!validSymbols.test(e.target.value)) {
                  isErrorReviewSymbols(true);
                  isErrorReviewEmpty(false);
                } else {
                  isErrorReviewEmpty(false);
                  isErrorReviewSymbols(false);
                }
                setReviewForm(e.target.value);
              }}
              onClick={() => isErrorReviewEmpty(true)}
            />
            {errorReviewEmpty ? (
              <div className="Create_card_error">Review can't be empty!</div>
            ) : (
              <></>
            )}
            {errorReviewSymbols ? (
              <div className="Create_card_error">
                Review can't contain symbols!
              </div>
            ) : (
              <></>
            )}
            {errorNameEmpty ||
            errorReviewEmpty ||
            errorNameSymbols ||
            errorReviewSymbols ? (
              <></>
            ) : (
              <input
                className="Create_card_btn"
                type="button"
                value="Send"
                onClick={() => {
                  safeForm();
                  document.getElementById("createReviewForm").reset();
                }}
              />
            )}
          </form>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  toPhoto: state.toPhoto,
  photoRef: state.photoRef,
  photoIsChosen: state.photoIsChosen,
  coordinates: state.coordinates,
  hotelName: state.hotelName,
  photo: state.photo,
  lattitude: state.lattitude,
  longitude: state.longitude,
  stars: state.stars,
  review: state.review,
});
export default connect(mapStateToProps)(CreateReview);
