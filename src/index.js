import React from "react";
import ReactDOM from "react-dom";
import AppConfig from "./Config/App";
import { Provider } from "react-redux";
import { appStore } from "../Redux/Store/index";

import "./styles.css";

const store = appStore();

function App() {
  return (
    <Provider store={store}>
      <AppConfig />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
