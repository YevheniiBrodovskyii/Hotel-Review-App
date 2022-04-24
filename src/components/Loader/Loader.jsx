import { DotSpinner } from "@uiball/loaders";

import "./loader.sass";

function Loader() {
  return (
    <div className="Loader">
      <h3 className="Loader_title">Loading...</h3>
      <div className="Loader_wrapper">
        <DotSpinner size={150} speed={0.9} color="#DAAD86" />
      </div>
    </div>
  );
}

export default Loader;
