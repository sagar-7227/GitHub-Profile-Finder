import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store.js"

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
