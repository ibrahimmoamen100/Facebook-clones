import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import "./MiddleList.css";

export default function MiddleList() {
  return (
    <Fragment>
      <ul className="middle_list_icons">
        <NavLink data-tip data-for="home_icons" exact to="/">
          <i className="fas fa-home"></i>
          <ReactTooltip id="home_icons" place="bottom" effect="solid">
            Home
          </ReactTooltip>
        </NavLink>
        <NavLink data-tip data-for="freinds_icons" to="/Freinds">
          <i className="fas fa-user-friends"></i>
          <ReactTooltip id="freinds_icons" place="bottom" effect="solid">
            Freinds
          </ReactTooltip>
        </NavLink>
        <NavLink data-tip data-for="watch_icons" to="/Watch">
          <i className="fas fa-tv"></i>
          <ReactTooltip id="watch_icons" place="bottom" effect="solid">
            Watch
          </ReactTooltip>
        </NavLink>
        <NavLink data-tip data-for="marketplace" to="/Marketplace">
          <i className="fas fa-home"></i>
          <ReactTooltip id="marketplace" place="bottom" effect="solid">
            Marketplace
          </ReactTooltip>
        </NavLink>
        <NavLink data-tip data-for="group" to="/Group">
          <i className="fas fa-users"></i>
          <ReactTooltip id="group" place="bottom" effect="solid">
            Group
          </ReactTooltip>
        </NavLink>
      </ul>
    </Fragment>
  );
}
