import "./search.sass";
import { connect } from "react-redux";
import { fetchHotels, setIsLoadedSearch } from "../..";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebaseConfig";
function Search(props) {
  const { hotels } = props;

  async function getKeywordHotels(search) {
    const keywordHotels = [];
    console.log(hotels);
    const hotelsCopy = [];
    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      hotelsCopy.push([doc.id, doc.data()]);
    });
    for (let hotel of hotelsCopy) {
      let review = hotel[1].review.toLowerCase();
      if (review.includes(search.toLowerCase())) {
        keywordHotels.push(hotel);
      }
    }
    fetchHotels(keywordHotels);
  }
  return (
    <div className="Search">
      <div className="Search_container">
        <input
          className="Search_input"
          placeholder="Search using keywords..."
          type="search"
          onChange={(e) => {
            setIsLoadedSearch(true);
            setTimeout(() => {
              getKeywordHotels(e.target.value);
              setIsLoadedSearch(false);
            }, 500);
          }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  hotels: state.hotels,
});
export default connect(mapStateToProps)(Search);
