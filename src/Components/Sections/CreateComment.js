import React from "react";
import "./CreateComment.css";
import user from "../../image/my.jpg";
import { NavLink } from "react-router-dom";

import "../../App.css";
import { render } from "@testing-library/react";

export default class CreateComment extends React.Component {
  state = {
    value: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = () => {
    console.log("hello");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="create-comment">
        <div className="img-inpt">
          <NavLink to="/MyPage" className="user-img">
            <img src={user} />
          </NavLink>
          <textarea
            type="text"
            placeHolder="What is on your mind , Ahmed?"
          ></textarea>
        </div>
        <div className="image-post">
          <div className="img-btn">
            <input
              ref="{any thing}" // any thing
              onChange={this.handleChange}
              name="img-vid"
              id="img-vid"
              type="file"
            />
            <label className="btn " name="img-vid" for="img-vid">
              <i className="far fa-images"></i>
              <span> Photo/Video </span>
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Post
          </button>
        </div>
      </form>
    );
  }
}
