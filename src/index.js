import React from "react";
import ReactDOM from "react-dom";
import AppConfig from "./Config/App";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AppConfig />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
