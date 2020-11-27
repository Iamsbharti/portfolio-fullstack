import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import configureStore from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
const store = configureStore();
ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("root")
);
