import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { showMap } from "../..";
import { connect } from "react-redux";

import "./popupMap.sass";

function PopupMap(props) {
  const { name, localization } = props;

  return (
    <div className="PopupMap animate__animated animate__bounceIn">
      <div className="leaflet-container">
        <MapContainer center={localization} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={localization}>
            <Popup>
              <h3>{name} is here!</h3>
            </Popup>
          </Marker>
          <div className="leaflet-wrapper">
            <button
              className="leaflet_back"
              onClick={() => showMap(false, null)}
            >
              Close
            </button>
          </div>
        </MapContainer>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  map: state.map,
  mapId: state.mapId,
});

export default connect(mapStateToProps)(PopupMap);
