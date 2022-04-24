import "./filter.sass";

function Filter() {
  return (
    <div>
      <h3>Sortować według</h3>
      <div>
        <select>
          <option value="name">Name</option>
          <option value="stars">More stars</option>
          <option value=""></option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
