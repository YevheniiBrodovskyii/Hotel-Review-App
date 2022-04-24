import { useState } from "react";
import "./search.sass";

function Search() {
  const [search, goSearch] = useState("");

  return (
    <div className="Search">
      <div className="Search_container">
        <input
          className="Search_input"
          placeholder="Search using keywords..."
          type="search"
          value={search}
          onChange={(e) => goSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
