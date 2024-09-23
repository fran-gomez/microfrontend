import React from "react";
import ReactDOM from "react-dom";
import MiCompPolitica from "./MiCompPolitica";
import MiCompEntretenimiento from "./MiCompEntretenimiento";

import "./index.css";

const App = () => (
  <div className="container">
     {/* <MiCompPolitica /> */}
     <MiCompEntretenimiento />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  