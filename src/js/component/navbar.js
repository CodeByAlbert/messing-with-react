import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link text-light active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link text-light" href="#colorBox">
                Color Box
              </a>
              <a className="nav-link text-light" href="#webcamBox">
                Webcam Box
              </a>
              <a className="nav-link text-light disabled" aria-disabled="true">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
