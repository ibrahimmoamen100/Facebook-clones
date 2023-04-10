import React from "react";
import "./CommentPosted.css";
import user from "../../image/my.jpg";
import like from "../../image/like.svg";
import angry from "../../image/angry.svg";
import haha from "../../image/haha.svg";
import wow from "../../image/wow.svg";
import video from "../../image/facebook.mp4";
import love from "../../image/heart.png";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import "../../App.css";

export default function CommentPosted(props) {
  return (
    <div className="comment-posted">
      <div className="comment-titlebar">
        <NavLink to="/MyPage" className="user-img">
          <img src={user} />
        </NavLink>
        <div className="username-time">
          <NavLink to="/Freinds">IBrahim Moamen</NavLink>
          <span>
            April 13 at 1:26 PM · Shared with puplic '
            <i className="fas fa-globe-americas"></i>
          </span>
        </div>
        <div className="option-comment">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="comment-content">
        {props.content ? <span> {props.content} </span> : ""}
        {/* Check for link */}

        {props.link ? (
          <a href={props.link}>
            {props.content}
            {props.img}
          </a>
        ) : (
          ""
        )}

        {/* check if video execting  */}
        {props.img ? <img src={props.img} /> : ""}
        {/* check if video execting  */}
        {props.video ? (
          <video controls>
            <source src={props.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          ""
        )}
      </div>
      <div className="like-comment">
        <div className="likes" data-tip data-for="like">
          <img src={love} />
          <img src={like} />

          <ReactTooltip id="like" place="bottom" effect="solid">
            Ahmed Hamdy <br></br> Yasser Mamduh <br></br> Hossam Mohamed
            <br></br>
            Mohamed Gamal <br></br> Osama Mohamed<br></br> Mostafa Sabry
            <br></br> and more then 999k
          </ReactTooltip>
          <span style={({ color: "gray" }, { marginLeft: "3px" })}> 999k </span>
        </div>
        <span> 17 Comments </span>
      </div>
      <div className="do-like-comment">
        <div className="do-like">
          <i className="far fa-thumbs-up"></i>
          <span> Like</span>
        </div>
        <div className="do-comment">
          <i className="far fa-comment"></i>

          <span> Comment</span>
        </div>
        <div className="do-share">
          <i className="fas fa-share"></i>

          <span> Share</span>
        </div>
      </div>
    </div>
  );
}
