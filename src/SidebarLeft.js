import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SidebarLeft.css";

export default function SidebarLeft() {
  const [data, setData] = useState([]);
  const [mediaType, setMediaType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=esGhqpCdz7yQx2f3DAwcWxf412oKlvvY8cdL3MAr"
      );
      setMediaType(response.data.media_type);
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body pb-0">
        <h5 className="card-title">NASA daily picture</h5>
        <h6 className="card-subtitle mb-3">{data.date}</h6>
        <div>
          {data.title}
          <br />
          <br />
          <div>
            {mediaType === "video" ? (
              <iframe
                src={data.url}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img className="card__image" src={data.hdurl} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
