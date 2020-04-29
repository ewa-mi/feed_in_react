import React from "react";
import "./SidebarRight.css";

export default function SidebarRight() {
  return (
    <div className="side">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/000/190/852/original/Flat_Galaxi_Vector_Background-01.jpg"
        alt="galactics"
        title="news from galactics"
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
