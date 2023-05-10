import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{color : "yellow", fontSize : "30px",cursor : "pointer"}}>
            ShowMania
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/booked">
                    Booked Shows
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
