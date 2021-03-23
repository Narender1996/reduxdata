import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { combineReducers } from "redux";
import { createStore } from "redux";
import  UserReducer  from "./Content/User/Redux/Reducer"

const RootReducer = combineReducers({
  UserReducer,
});

const Store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

