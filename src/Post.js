import "./Post.css";
import astronaut from "./images/astronaut.jpg";
import mars from "./images/mars.jpg";
import radioactive from "./images/radioactive.jpg";
import React, { useState } from "react";

export default function Post(props) {
  const [numLikes, set_numLikes] = useState(0);

  const increment = () => {
    console.log("Yes, liked!");
    set_numLikes(numLikes + 1);
  };

  return (
    <div className="card mb-3 postLook">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.image} className="card-img" />
        </div>
        <div className="col-md-8">
          <div className="container">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.lead}</p>
              <p className="card-text">
                <small className="text-muted">{props.date}</small>
              </p>
              <div className="buttonSection">
                <button className="moreButton">Read more</button>
                <button className="like" onClick={increment}>
                  <b className="likeNum">{numLikes}</b>
                  Like
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
