import { useState } from "react";
import "./search.sass";

function Search() {
  const [search, goSearch] = useState("");

  return (
    <div>
      <input
        placeholder="Search using keywords"
        type="search"
        value={search}
        onChange={(e) => goSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
