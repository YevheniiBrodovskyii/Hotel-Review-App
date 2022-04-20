import { showMap } from "../..";
import starsMap from "../../starsMap";
import { deleteReview } from "../..";
import { connect } from "react-redux";
import PopupMap from "../PopupMap/PopupMap";
import "./hotel.sass";

function Hotel(props) {
  const {
    name,
    img,
    localization: lat,
    long,
    stars,
    review,
    author,
    filter,
    id,
    map,
    mapId,
  } = props;

  return (
    <div>
      {map && id === mapId ? (
        <PopupMap />
      ) : (
        <div className="Hotel_card">
          {filter ? (
            <button onClick={() => deleteReview(id)}>Delete</button>
          ) : (
            <></>
          )}
          <h2 className="Hotel_card-name">{name}</h2>
          <div className="Hotel_card_wrapper">
            <img className="Hotel_card-img" src={img} alt="hotel_img" />
            <h3 className="Hotel_card-localization">
              <button onClick={() => showMap(true, id)}>Show on map</button>
            </h3>
            {starsMap.get(stars)}
          </div>
          <p className="Hotel_card-review">{review}</p>
          <h5 className="Hotel_card-author">Wroten by {author}</h5>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  map: state.map,
  mapId: state.mapId,
});
export default connect(mapStateToProps)(Hotel);
