import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/poppins"; // Default (400 normal)
import "@fontsource/poppins/600.css"; // SemiBold
import "@fontsource/poppins/700.css"; // Bold

// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./Store/store"; // Pastikan store telah diimpor dengan benar
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
