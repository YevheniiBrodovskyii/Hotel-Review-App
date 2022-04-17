import starsMap from "../../starsMap";

import "./hotel.sass";

function Hotel(props) {
  const { name, img, localization, stars, review, author } = props;

  return (
    <div className="Hotel_card">
      <h2 className="Hotel_card-name">{name}</h2>
      <div className="Hotel_card_wrapper">
        <img className="Hotel_card-img" src={img} alt="hotel_img" />
        <h3 className="Hotel_card-localization">
          Lat:{localization._lat}
          Long:{localization._lat}
        </h3>
        {starsMap.get(stars)}
      </div>
      <p className="Hotel_card-review">{review}</p>
      <h5 className="Hotel_card-author">Wroten by {author}</h5>
    </div>
  );
}

export { Hotel };
