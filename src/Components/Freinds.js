import React, { Component } from "react";
import axios from "axios";
import user from "../image/my.jpg";
import user2 from "../image/cc.jpg";
import user3 from "../image/cc2.jpg";
import "../App.css";

import "./Freinds.css";

export default class Freinds extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    //   this.setState({
    //     data: response.data,
    //   });
    // });
  }
  render() {
    return (
      <div className="freinds_part">
        <div className="freinds-titlebar">
          <span>Contact</span>
          <span>
            <i className="fas fa-users"></i>
          </span>
          <span>
            <i className="fas fa-video"></i>
          </span>
          <span>
            <i className="fas fa-search"></i>
          </span>
          <span>
            <i className="fas fa-ellipsis-h"></i>
          </span>
        </div>
        <div className="freinds-list">
          <div className="freind-item">
            <div className="freinds-img-part">
              <img src={user2} />
            </div>
            <span>Hamada Helal</span>
          </div>
          <div className="freind-item">
            <div className="freinds-img-part">
              <img src={user3} />
            </div>
            <span>Hamada Helal</span>
          </div>
          <div className="freind-item">
            <div className="freinds-img-part">
              <img src={user2} />
            </div>
            <span>Hamada Helal</span>
          </div>
        </div>
      </div>
    );
  }
}
