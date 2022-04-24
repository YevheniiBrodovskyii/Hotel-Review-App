import { saveHotels } from "../..";
import starsMap from "../../starsMap";
import { connect } from "react-redux";
import PopupMap from "../PopupMap/PopupMap";
import "./hotel.sass";
import { useEffect, useState } from "react";
import { deleteDoc, doc } from "firebase/firestore/lite";
import { ref, getDownloadURL, deleteObject } from "firebase/storage";
import { storage, db } from "../../firebaseConfig";

function Hotel(props) {
  const {
    name,
    localization: { _lat, _long },
    stars,
    review,
    author,
    filter,
    id,
    user,
    img,
  } = props;
  const [photoSrc, setPhotoSrc] = useState("");
  const locatization = [_lat, _long];
  const [toShowMap, setToShowMap] = useState(false);
  useEffect(() => {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setPhotoSrc(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  });

  // Delete review by id
  async function deleteReview(id) {
    console.log(`Trying to delete object with id=${id}`);
    await deleteDoc(doc(db, "reviews", id));
    saveHotels();
  }
  return (
    <>
      {filter ? (
        <>
          {author === user.email ? (
            <>
              {toShowMap ? (
                <PopupMap
                  name={name}
                  localization={locatization}
                  setToShowMap={setToShowMap}
                />
              ) : (
                <div className="Hotel_card animate__animated animate__fadeIn">
                  <h2 className="Hotel_card-name">{name}</h2>
                  <div className="Hotel_card_wrapper">
                    <img
                      className="Hotel_card-img"
                      src={photoSrc}
                      alt="hotel_img"
                    />
                    <h3 className="Hotel_card-localization">
                      <button
                        className="Hotel_card-btn"
                        onClick={() => setToShowMap(true)}
                      >
                        Show on map
                      </button>
                    </h3>
                    {starsMap.get(stars)}
                  </div>
                  <div className="Hotel_card-review">
                    <p className="Hotel_card-review-content">{review}</p>
                  </div>
                  <div className="Hotel_card-delete--wrapper">
                    <button
                      className="Hotel_card-delete"
                      onClick={() => {
                        deleteReview(id);
                        deleteObject(ref(storage, img));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {toShowMap ? (
            <PopupMap
              name={name}
              localization={locatization}
              setToShowMap={setToShowMap}
            />
          ) : (
            <div className="Hotel_card animate__animated animate__fadeIn">
              <h2 className="Hotel_card-name">{name}</h2>
              <div className="Hotel_card_wrapper">
                <img
                  className="Hotel_card-img"
                  src={photoSrc}
                  alt="hotel_img"
                />
                <h3 className="Hotel_card-localization">
                  <button
                    className="Hotel_card-btn"
                    onClick={() => setToShowMap(true)}
                  >
                    Show on map
                  </button>
                </h3>
                {starsMap.get(stars)}
              </div>
              <div className="Hotel_card-review">
                <p className="Hotel_card-review-content">{review}</p>
              </div>
              <h5 className="Hotel_card-author">Wroten by {author}</h5>
            </div>
          )}
        </>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Hotel);
