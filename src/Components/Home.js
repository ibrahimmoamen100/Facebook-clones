import React from "react";
import MenuSection from "./MenuSection";
import "./Home.css";
import "./Home2.css";
import "./../App.css";
import SectionMid from "./SectionMid";
import Freinds from "./Freinds";
export default class Home extends React.Component {
  render() {
    return (
      <div className="home_section">
        {/* <h1>hello this Home Section</h1> */}
        {/* <div className="App">
          <button onClick={this.increase}>Increase</button>
          <div>{this.state.count}</div>
          <button onClick={this.decrease}>Decrease </button>
        </div> */}
        <div className="first-section">
          <MenuSection />
        </div>

        <div className="mid-section">
          <SectionMid />
        </div>
        <div className="last-section">
          <Freinds />
        </div>
      </div>
    );
  }
}
