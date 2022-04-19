import "./createReview.sass";

function CreateReview() {
  return (
    <div className="Create_card">
      <h2 className="Create_card-title">Tell us about...</h2>
      <hr className="Create_card-hr" />
      <form action="" className="Create_card-form">
        <input
          className="Create_card-input"
          type="text"
          placeholder="Name of Hotel"
          required
        />
        <input
          className="Create_card-input Create_card-input--photo"
          type="text"
          placeholder="Upload Photo"
        />
        <div className="Create_card-location--container">
          <input
            className="Create_card-input Create_card-location "
            type="number"
            placeholder="Long"
            required
          />
          <input
            className="Create_card-input Create_card-location--2"
            type="number"
            placeholder="Latt"
            required
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
          required
        />
        <input className="Create_card_btn" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default CreateReview;
