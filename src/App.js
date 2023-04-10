import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import React, { useState, Component, Fragment } from "react";
import { connect } from "react-redux";
import Home from "./Components/Home";
import Freinds from "./Components/Freinds";
import Watch from "./Components/Watch";
import Marketplace from "./Components/Marketplace";
import Group from "./Components/Group";
import Navbar from "./Components/Navbar";
import MenuSection from "./Components/MenuSection";
import MenuPage from "./Components/MenuPage";
import MyPage from "./Components/MyPage";
import Error from "./Components/Error";
import $ from "jquery";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("hello from component did mount");
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="apps">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Freinds" component={Freinds} />
              <Route path="/Watch" component={Watch} />
              <Route path="/Marketplace" component={Marketplace} />
              <Route path="/Group" component={Group} />
              <Route path="/MenuPage" component={MenuPage} />
              <Route path="/MyPage" component={MyPage} />
              <Route path="/:error_page" component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     count: state.count,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increase: () => dispatch({ type: "INCREASE" }),
//     decrease: () => dispatch({ type: "DECREASE" }),
//   };
// }

// const reducerConnect = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
