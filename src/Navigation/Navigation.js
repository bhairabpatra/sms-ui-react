import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
        <a className="navbar-brand">
          SMS
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
        <div class="collapse navbar-collapse" id="navbarNav p-5">
          <ul class="navbar-nav">
            <li class="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
            <Link to="/about" className="nav-link">About</Link>
            </li>
            <li class="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
            </li>   
            <li class="nav-item">
               <Link to="/dashboard" className="nav-link"> Dashboard</Link>
            </li>
            
          </ul>
        </div>
        </div>
      </nav>

    </div>
  );
}

export default Navigation;
