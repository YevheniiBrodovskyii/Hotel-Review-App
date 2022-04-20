import "./createReview.sass";
import { toTakePhoto } from "../..";
import TakePhoto from "../TakePhoto/TakePhoto";
import { connect } from "react-redux";

function CreateReview(props) {
  const { toPhoto, photoRef } = props;
  return (
    <div>
      {toPhoto ? (
        <TakePhoto />
      ) : (
        <div className="Create_card">
          <h2 className="Create_card-title">Tell us about...</h2>
          <hr className="Create_card-hr" />
          <form action="" className="Create_card-form">
            <input
              className="Create_card-input"
              type="text"
              placeholder="Name of Hotel"
            />
            <input
              className="Create_card-input Create_card-input--photo"
              type="file"
              placeholder="Upload Photo"
            />
            <button onClick={() => toTakePhoto(true)} type="button">
              Take Photo
            </button>
            <div className="Create_card-location--container">
              <input
                className="Create_card-input Create_card-location "
                type="number"
                placeholder="Long"
              />
              <input
                className="Create_card-input Create_card-location--2"
                type="number"
                placeholder="Latt"
              />
            </div>
            <div className="Create_card-stars">
              <input type="radio" id="star-5" name="rating" value="5" />
              <label htmlFor="star-5" title="Оценка «5»"></label>
              <input type="radio" id="star-4" name="rating" value="4" />
              <label htmlFor="star-4" title="Оценка «4»"></label>
              <input type="radio" id="star-3" name="rating" value="3" />
              <label htmlFor="star-3" title="Оценка «3»"></label>
              <input type="radio" id="star-2" name="rating" value="2" />
              <label htmlFor="star-2" title="Оценка «2»"></label>
              <input type="radio" id="star-1" name="rating" value="1" />
              <label htmlFor="star-1" title="Оценка «1»"></label>
            </div>
            <input
              className="Create_card-input Create_card-review"
              type="text"
              placeholder="Describe the Hotel"
            />
            <input className="Create_card_btn" type="submit" value="Send" />
            <a href={photoRef} download>
              Download
            </a>
          </form>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  toPhoto: state.toPhoto,
  photoRef: state.photoRef,
});
export default connect(mapStateToProps)(CreateReview);
