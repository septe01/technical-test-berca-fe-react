import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import App from "./page/App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

// import store from './_redux/store';
import getStore from "./utils/store";
const { store, persiStore } = getStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
