import React from "react";
import "./SidebarRight.css";

export default function SidebarRight() {
  return (
    <div className="side">
      <img
        src="https://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/50/08/49/50084978-0ae7-e50c-47af-e5a89f174d36/source/256x256bb.jpg"
        className="card-img-top"
      />
      <div className="side-body">
        <h5 className="side-title">From the Space</h5>
        <p className="side-text">
          Breaking news from other galactics go here, you can push the button to
          see all the details, good luck!
        </p>
        <a href="#" className="btn btn-info">
          Read news
        </a>
      </div>
    </div>
  );
}
