import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./reducer/rootReducer";
import { createStore } from "redux";
// const setStore = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={setStore}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.details = function () {
  console.log(`user name = ${this.name} and user age = ${this.age}`);
};

let user1 = new Person("ahmed", 25);

user1.details();
