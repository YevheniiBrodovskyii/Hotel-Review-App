import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./popupMap.sass";

function PopupMap() {
  return (
    <div className="lealfet-container">
      <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <button className="lealfet_back">Close</button>
      </MapContainer>
    </div>
  );
}

export default PopupMap;
