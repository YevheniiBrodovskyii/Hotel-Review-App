import { connect } from "react-redux";
import Hotel from "../Hotel/Hotel";
import Search from "../Search/Search";
import "./hotels.sass";
import Loader from "../Loader/Loader";

function Hotels(props) {
  const { hotels = [], filter, isLoadedSearch } = props;

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
        <>
          <h2 className="Hotels_title">All reviews</h2>
          <hr className="Hotels_hr" />
          <Search />
          {isLoadedSearch ? (
            <Loader />
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoadedSearch: state.isLoadedSearch,
});

export default connect(mapStateToProps)(Hotels);
