import "./PostPage.css";
import React from "react";
import { Link } from "react-router-dom";

export default function PostPage(props) {
  return (
    <div className="general">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="card shadow-sm mb-4">
        <div className="card-body pb-0 postBody">
          <h6 className="card-subtitle mb-3">{props.date}</h6>
          <div>
            <h1 className="title">{props.title}</h1>

            <div>{props.lead}</div>
            <br></br>
            <div className="img_div">
              <img className="card__image postImg" src={props.image} />
            </div>
            <br></br>
            <div>{props.full}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
