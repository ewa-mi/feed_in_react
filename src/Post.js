import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <div class="card mb-3 postLook">
      <div class="row no-gutters">
        <div class="col-md-4 postLeftSide">
          <img
            src="https://follyandivy.files.wordpress.com/2008/09/moon2.jpg"
            class="card-img "
          />
        </div>
        <div class="col-md-8">
          <div class="container">
            <div class="card-body">
              <h5 class="card-title">Post title</h5>
              <p class="card-text">
                Here we write some lead for our article, to let the readers know
                about the topic and the main idea of this article. It may be a
                few initial sentences of the article, or whatever you want...
              </p>
              <p class="card-text">
                <small class="text-muted">Other features go here</small>
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
