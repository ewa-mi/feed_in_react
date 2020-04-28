import React from "react";
import "./Post.css";
import astronaut from "./images/astronaut.jpg";
import mars from "./images/mars.jpg";
import radioactive from "./images/radioactive.jpg";

export default function Post(props) {
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
                <button className="moreButton">
                  <a
                    className="moreButton:hover"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Read more
                  </a>
                </button>
                <button className="like">
                  <a
                    className="like:hover"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Like
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
