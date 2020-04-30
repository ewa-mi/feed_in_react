import React from "react";
import "./Post.css";

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
                <button className="moreButton">Read more</button>
                <button
                  className="like"
                  onClick={() => props.changeLikes(props.id, 1)}
                >
                  <b className="likeNum">{props.likes}</b>
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
