import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
//import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducer";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
