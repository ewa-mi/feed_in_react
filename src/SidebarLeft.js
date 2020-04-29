import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SidebarLeft.css";

export default function SidebarLeft() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Use Effect!");
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=esGhqpCdz7yQx2f3DAwcWxf412oKlvvY8cdL3MAr"
      );
      console.log("axios response", response.data);
      setData(response.data);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body pb-0">
        <h5 className="card-title">NASA daily image</h5>
        <h6 className="card-subtitle mb-3">{data.date}</h6>
        <p>
          {data.title}
          <br />
          <br />
          <div>
            <img className="card__image" src={data.hdurl} />
          </div>
        </p>
      </div>
    </div>
  );
}
