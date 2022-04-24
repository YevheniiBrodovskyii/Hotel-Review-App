import Hotel from "../Hotel/Hotel";
import Filter from "../Filter/Filter";
import "./hotels.sass";

function Hotels(props) {
  const { hotels = [], filter } = props;

  return (
    <div className="Hotels animate__animated animate__fadeIn ">
      {filter ? (
        <div className="Hotels_wrapper">
          {hotels.map((hotel, id) => (
            <Hotel
              key={hotel[0]}
              {...hotel[1]}
              id={hotel[0]}
              photoSrc={hotel[2]}
              filter={filter}
            />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="Hotels_title">All reviews</h2>
          <hr className="Hotels_hr" />
          <Filter />
          <div className="Hotels_wrapper">
            {hotels.map((hotel, id) => (
              <Hotel
                key={hotel[0]}
                {...hotel[1]}
                id={hotel[0]}
                photoSrc={hotel[2]}
                filter={filter}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hotels;
