import "./createReview.sass";

function CreateReview() {
  return (
    <div className="Create_card">
      <h2 className="Create_card-title">Tell us about</h2>
      <hr />
      <input type="text" placeholder="Name of Hotel" />
      <input type="text" placeholder="Upload Photo" />
      <input type="text" placeholder="Where is located?" />
      <input type="radio" id="1star" name="stars" value="1 stars" />
      <input type="radio" id="2star" name="stars" value="2 stars" />
      <input type="radio" id="3star" name="stars" value="3 stars" />
      <input type="radio" id="4star" name="stars" value="4 stars" />
      <input type="radio" id="5star" name="stars" value="5 stars" />
      <input type="text" placeholder="Describe the Hotel" />
      <input type="submit">Send</input>
    </div>
  );
}

export { CreateReview };
