import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/terms" className="nav-link px-2 text-muted">
              Terms
            </a>
          </li>
        </ul>
        <div className="">
          <a
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f p-1"></i>
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter p-1"></i>
          </a>

          <a href="https://www.google.com" target="_blank" aria-label="Google">
            <i className="fab fa-google p-1"></i>
          </a>

          <a href="https://www.github.com" target="_blank" aria-label="GitHub">
            <i className="fab fa-github p-1"></i>
          </a>

          <a href="https://www.reddit.com" target="_blank" aria-label="Reddit">
            <i className="fab fa-reddit-alien p-1" style={{ color: "red" }}></i>
          </a>

          <a
            href="https://www.whatsapp.com"
            target="_blank"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp p-1"></i>
          </a>
        </div>
        <p className="text-center text-muted">© 2021 Company, Inc</p>
      </footer>
    </div>
  );
}
