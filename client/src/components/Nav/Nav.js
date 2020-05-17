import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(props) {
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    
  },[]);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        {/* how do I make this dynamic? */}
        About me
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">
              {props.aboutMe} <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">
              {props.contactMe}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="portfolio.html">
              {props.portfolio}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
