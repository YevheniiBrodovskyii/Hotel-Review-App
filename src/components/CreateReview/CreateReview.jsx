import "./createReview.sass";
import { toTakePhoto, saveHotels, createPhotoRef } from "../..";
import TakePhoto from "../TakePhoto/TakePhoto";
import { connect } from "react-redux";
import { validSymbols } from "../../regex";
import { useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore/lite";
import { db, storage } from "../../firebaseConfig";
import { uploadBytes, ref } from "firebase/storage";

function CreateReview(props) {
  const { user, photoRef, toPhoto } = props;

  const [hotelName, setHotelName] = useState("");
  const [stars, setStars] = useState(0);
  const [lattitude, setLattitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [review, setReview] = useState("");
  const [photoIsChosen, setPhotoIsChosen] = useState(null);
  const [errorNameSymbols, isErrorNameSymbols] = useState(false);
  const [errorReviewSymbols, isErrorReviewSymbols] = useState(false);
  const [errorNameEmpty, isErrorNameEmpty] = useState(true);
  const [errorReviewEmpty, isErrorReviewEmpty] = useState(true);
  const [errorReviewOverfill, isErrorReviewOverfill] = useState(false);

  // Take geolocation using gps build in phone
  function takeGeoposition() {
    navigator.geolocation.getCurrentPosition(success, error);
    function success(pos) {
      let crd = pos.coords;

      // getGeoposition([crd.latitude, crd.longitude]);
      setLattitude(crd.latitude);
      setLongitude(crd.longitude);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }
  takeGeoposition();
  // Upload photo using counter, in order to prevent repetition
  async function uploadPhoto(file, counter) {
    const storageRef = ref(storage, `hotel-image-${counter}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  }
  // Save form using local states and update them after finishing
  async function safeForm() {
    const photo = photoIsChosen ? photoIsChosen : photoRef;
    const querySnapshot = await getDocs(collection(db, "counter"));
    let counter = 0;
    querySnapshot.forEach((doc) => {
      counter = doc.data().photo_count;
    });
    await updateDoc(doc(db, "counter", "HU3Wfcb77M8r3f51qKeG"), {
      photo_count: counter + 1,
    });
    uploadPhoto(photo, counter);
    await addDoc(collection(db, "reviews"), {
      name: hotelName,
      img: `hotel-image-${counter}`,
      localization: { _lat: lattitude, _long: longitude },
      author: user.email,
      stars: stars,
      review: review,
    });
    console.log(photo);
    setHotelName("");
    setReview("");
    setLongitude(null);
    setLattitude(null);
    setPhotoIsChosen(null);
    createPhotoRef(null);
    setStars(0);
    saveHotels();
  }

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
                } else if (validSymbols.test(e.target.value)) {
                  isErrorNameSymbols(true);
                  isErrorNameEmpty(false);
                } else {
                  isErrorNameEmpty(false);
                  isErrorNameSymbols(false);
                }
                setHotelName(e.target.value);
              }}
              onClick={(e) => {
                if (e.target.value === "") {
                  isErrorNameEmpty(true);
                }
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
                <i
                  className="fa fa-check fa-check-cr fa-xl"
                  aria-hidden="true"
                ></i>
              </div>
            ) : (
              <div className="Create_card-input--photo">
                <input
                  type="file"
                  placeholder="Upload Photo"
                  onInput={(e) => {
                    setPhotoIsChosen(e.target.files[0]);
                  }}
                />
              </div>
            )}
            {photoIsChosen ? (
              <i
                className="fa fa-check fa-check-cr-2 fa-xl"
                aria-hidden="true"
              ></i>
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
                  setLongitude(e.target.value);
                }}
              />
              <input
                className="Create_card-input Create_card-location--2"
                type="number"
                placeholder="Latt"
                value={lattitude ? lattitude : ""}
                onInput={(e) => {
                  setLattitude(e.target.value);
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
                  setStars(parseInt(e.target.value));
                }}
              />
              <label htmlFor="star-5" title="Оценка «5»"></label>
              <input
                type="radio"
                id="star-4"
                name="rating"
                value="4"
                onInput={(e) => {
                  setStars(parseInt(e.target.value));
                }}
              />
              <label htmlFor="star-4" title="Оценка «4»"></label>
              <input
                type="radio"
                id="star-3"
                name="rating"
                value="3"
                onInput={(e) => {
                  setStars(parseInt(e.target.value));
                }}
              />
              <label htmlFor="star-3" title="Оценка «3»"></label>
              <input
                type="radio"
                id="star-2"
                name="rating"
                value="2"
                onInput={(e) => {
                  setStars(parseInt(e.target.value));
                }}
              />
              <label htmlFor="star-2" title="Оценка «2»"></label>
              <input
                type="radio"
                id="star-1"
                name="rating"
                value="1"
                onInput={(e) => {
                  setStars(parseInt(e.target.value));
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
                } else if (validSymbols.test(e.target.value)) {
                  isErrorReviewSymbols(true);
                  isErrorReviewEmpty(false);
                } else if (e.target.value.length > 400) {
                  isErrorReviewOverfill(true);
                } else {
                  isErrorReviewEmpty(false);
                  isErrorReviewSymbols(false);
                  isErrorReviewOverfill(false);
                }
                setReview(e.target.value);
              }}
              onClick={(e) => {
                if (e.target.value === "") {
                  isErrorReviewEmpty(true);
                }
              }}
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
            {errorReviewOverfill ? (
              <div className="Create_card_error">
                Review must not exceed 400 characters!
              </div>
            ) : (
              <></>
            )}
            {errorNameEmpty ||
            errorReviewEmpty ||
            errorNameSymbols ||
            errorReviewSymbols ||
            errorReviewOverfill ? (
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
  user: state.user,
  photoRef: state.photoRef,
});
export default connect(mapStateToProps)(CreateReview);
