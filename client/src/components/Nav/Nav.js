import React, { useEffect } from "react";
import { Link, useLocation , useRouteMatch} from "react-router-dom";

function Nav(props) {
  const location = useLocation();
  const match= useRouteMatch();
  console.log(location);
  useEffect(() => {
    
  },[]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {/* how do I make this dynamic? */}
       {location.pathname.slice(1)}
      </a>
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
            <a className="nav-link" href="/Home">
              Home <span className="sr-only"></span>
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="contact.html">
              contact me
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="Projects">
              portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
