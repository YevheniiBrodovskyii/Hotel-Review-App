import { Hotel } from "./Hotel";

function Hotels(props) {
  const { hotels = [] } = props;

  return (
    <div className="Hotels">
      {hotels.map((hotel, id) => (
        <Hotel key={id} {...hotel} />
      ))}
    </div>
  );
}

export { Hotels };
