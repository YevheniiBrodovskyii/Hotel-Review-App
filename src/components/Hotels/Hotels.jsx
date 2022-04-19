import { Hotel } from "../Hotel/Hotel";

import "./hotels.sass";

function Hotels(props) {
  const { hotels = [] } = props;

  return (
    <div className="Hotels">
      <h2 className="Hotels_title">All reviews</h2>
      <hr className="Hotels_hr" />
      <div className="Hotels_wrapper">
        {hotels.map((hotel, id) => (
          <Hotel key={id} {...hotel} />
        ))}
      </div>
    </div>
  );
}

export { Hotels };
