import { useState, useEffect } from "react";
import { Hotels } from "./Hotels";
import { WelcomePage } from "./WelcomePage";

function MainPage() {
  const [hotels, setHotels] = useState([]);

  return (
    <main className="content">
      <WelcomePage />
      {/* <Hotels hotels={hotels} /> */}
    </main>
  );
}

export { MainPage };
