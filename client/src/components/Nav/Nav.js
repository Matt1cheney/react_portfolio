import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  useEffect(() => {
    
  },[]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand">
       {location.pathname.slice(1)}
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/Home">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="contact.html">
              contact me
            </a>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/Projects">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
