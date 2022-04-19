import starsMap from "../../starsMap";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import {
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";
import "./hotel.sass";

function Hotel(props) {
  const {
    name,
    img,
    localization,
    stars,
    review,
    author,
    filter = false,
    deleteBtn = false,
    userEmail = null,
    id,
  } = props;

  async function deleteReview(id) {
    console.log(`Trying to delete object with id=${id}`);
    await deleteDoc(doc(db, "reviews", id));
  }

  if (filter) {
    console.log(author, userEmail);
    if (author === userEmail) {
      return (
        <div className="Hotel_card" id="hotel_card">
          {deleteBtn ? (
            <button onClick={() => deleteReview(id)}>Delete</button>
          ) : (
            <></>
          )}
          <h2 className="Hotel_card-name">{name}</h2>
          <div className="Hotel_card_wrapper">
            <img className="Hotel_card-img" src={img} alt="hotel_img" />
            <h3 className="Hotel_card-localization">
              {/* Lat:{localization._lat}
              Long:{localization._lat} */}
              <button>Show on map</button>
            </h3>
            {starsMap.get(stars)}
          </div>
          <p className="Hotel_card-review">{review}</p>
          <h5 className="Hotel_card-author">Wroten by {author}</h5>
        </div>
      );
    }
  } else {
    return (
      <div className="Hotel_card">
        <h2 className="Hotel_card-name">{name}</h2>
        <div className="Hotel_card_wrapper">
          <img className="Hotel_card-img" src={img} alt="hotel_img" />
          <h3 className="Hotel_card-localization">
            {/* Lat:{localization._lat}
            Long:{localization._lat} */}
            <button>Show on map</button>
          </h3>
          {starsMap.get(stars)}
        </div>
        <p className="Hotel_card-review">{review}</p>
        <h5 className="Hotel_card-author">Wroten by {author}</h5>
      </div>
    );
  }
}

export { Hotel };
