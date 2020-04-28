import React from "react";
import "./Post.css";

export default function Post(props) {
  return (
    <div class="card mb-3 postLook">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://follyandivy.files.wordpress.com/2008/09/moon2.jpg"
            class="card-img "
          />
        </div>
        <div class="col-md-8">
          <div class="container">
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.lead}</p>
              <p class="card-text">
                <small class="text-muted">{props.date}</small>
              </p>
              <div className="buttonSection">
                <button className="moreButton">
                  <a
                    class="moreButton:hover"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Read more
                  </a>
                </button>
                <button className="like">
                  <a class="like:hover" target="_blank" rel="nofollow noopener">
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
