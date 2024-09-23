import React from "react";
import ReactDOM from "react-dom";
import MiCompEntretenimiento from "./MiCompEntretenimiento";

import "./index.css";

const App = () => (
  <div className="container">
     <MiCompEntretenimiento />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  