import Hotel from "../Hotel/Hotel";

import "./hotels.sass";

function Hotels(props) {
  const { hotels = [], filter } = props;

  return (
    <div className="Hotels">
      {filter ? (
        <></>
      ) : (
        <div>
          <h2 className="Hotels_title">All reviews</h2>
          <hr className="Hotels_hr" />
        </div>
      )}
      <div className="Hotels_wrapper">
        {hotels.map((hotel, id) => (
          <Hotel key={hotel[0]} {...hotel[1]} id={hotel[0]} filter={filter} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
