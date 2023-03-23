import { useState } from "react";

import "assets/scss/index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg position-absolute w-100 px-sm-5 py-sm-3 border-bottom border-light border-opacity-25 main-navbar">
      <div className="container-fluid">
        <a className="text-white text-decoration-none fs-4" href="/">
          MOVIESTAN
        </a>
        <button
          className={`navbar-toggler bg-primary h-50 ${
            !isNavbarOpen ? "collapsed" : ""
          }`}
          aria-label="Toggle Navigation"
          aria-controls="navbarContent"
          aria-expanded="false"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse navbar-collapse-scss ${
            isNavbarOpen ? "show" : ""
          }`}
          id="navbarContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-2">
            <li className="nav-item me-sm-5">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-sm-5">
              <a className="nav-link text-white" href="/movies">
                Movies
              </a>
            </li>
            <li className="nav-item me-sm-5">
              <a className="nav-link text-white" href="/">
                TV Shows
              </a>
            </li>
          </ul>
          <div>
            <a href="/search">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
