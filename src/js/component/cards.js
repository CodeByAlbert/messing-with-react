import React from "react";

export default function Cards({ title, image, text, link }) {
  return (
    <div className="container-fluid">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
