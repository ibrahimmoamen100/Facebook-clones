import React, { Component } from "react";
import { Router, NavLink, Link } from "react-router-dom";
import MiddleList from "./MiddleList";
import ReactTooltip from "react-tooltip";

import "./Navbar.css";
import "../App.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    let prop = this.props;
  }
  state = {
    value: "",
  };

  // componentDidMount() {
  //   this.props = this.state.value;
  //   console(this.props);
  // }
  handleClick = () => {
    console.log(this.state.value);
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="navbar_top">
        {/* ############### First List  ########*/}

        <div className="logo_search">
          <NavLink className="logo" to="/">
            <i className="fab fa-facebook"></i>
          </NavLink>
          <form onSubmit={this.handleSubmit} className="search_part">
            <input
              type="search"
              onChange={this.handleChange}
              placeHolder="Search Facebook"
              autoComplete="off"
            />
            <i onClick={this.handleClick} className="fas fa-search"></i>
          </form>
          <NavLink className="menu" to="/MenuPage">
            <i className="fas fa-bars"></i>
          </NavLink>
        </div>

        {/* ############### Middle List  ########*/}

        <MiddleList />

        {/* ############### last List  ########*/}

        <ul className="last_list">
          <NavLink exact data-tip data-for="create" to="/Create">
            <i className="fas fa-plus"></i>
            <ReactTooltip id="create" place="bottom" effect="solid">
              Create
            </ReactTooltip>
          </NavLink>

          <NavLink data-tip data-for="massenger" to="/Massenger">
            <i className="fab fa-facebook-messenger"></i>
            <ReactTooltip id="massenger" place="bottom" effect="solid">
              Massenger
            </ReactTooltip>
          </NavLink>
          <NavLink data-tip data-for="notifications" to="/Notifications">
            <i className="fas fa-bell"></i>
            <ReactTooltip id="notifications" place="bottom" effect="solid">
              Notifications
            </ReactTooltip>
          </NavLink>
          <NavLink exact to="/Account">
            <i className="fas fa-sort-down"></i>
          </NavLink>
        </ul>
      </div>
    );
  }
}
