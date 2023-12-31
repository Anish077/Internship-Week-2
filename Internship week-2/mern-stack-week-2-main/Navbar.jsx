
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn btn-primary mx-1" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary mx-1" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary mx-1" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary mx-1" to="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary mx-1" to="/Signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;