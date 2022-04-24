import { showMap } from "../..";
import starsMap from "../../starsMap";
import { deleteReview } from "../..";
import { connect } from "react-redux";
import PopupMap from "../PopupMap/PopupMap";
import "./hotel.sass";
import { useEffect, useState } from "react";

import { ref, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../../firebaseConfig";

function Hotel(props) {
  const {
    name,
    localization: { _lat, _long },
    stars,
    review,
    author,
    filter,
    id,
    map,
    mapId,
    user,
    img,
  } = props;
  const [photoSrc, setPhotoSrc] = useState("");
  const locatization = [_lat, _long];

  useEffect(() => {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setPhotoSrc(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }, [photoSrc]);
  console.log(photoSrc);
  return (
    <>
      {filter ? (
        <>
          {author === user.email ? (
            <div className="2">
              {map && id === mapId ? (
                <PopupMap name={name} localization={locatization} />
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
                        onClick={() => showMap(true, id)}
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
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {map && id === mapId ? (
            <PopupMap name={name} localization={locatization} />
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
                    onClick={() => showMap(true, id)}
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
  map: state.map,
  mapId: state.mapId,
  user: state.user,
});
export default connect(mapStateToProps)(Hotel);
