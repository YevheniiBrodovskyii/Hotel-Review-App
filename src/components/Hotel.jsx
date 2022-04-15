function Hotel({ name, img, localization, stars, review, author }) {
  return (
    <div className="Hotel_card">
      <h2 className="Hotel_name">{name}</h2>
      <img className="Hotel_img" src={img} alt="hotel_img" />
      <h3 className="Hotel_localization">{localization}</h3>
      <p className="Hotel_stars">{stars}</p>
      <p className="Hotel_review">{review}</p>
      <h5 className="Hotel_author">Wroten by {author}</h5>
    </div>
  );
}

export { Hotel };
