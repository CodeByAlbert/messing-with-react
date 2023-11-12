import React from "react";

export default function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-5 fw-bold">Hello, world!</h1>
            <p className="fs-4">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <a href="https://www.example.com" className="btn btn-primary">
              Example Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
