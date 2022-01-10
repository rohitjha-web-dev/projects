import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Nav() {
  const navstyle = {
    color: "white",
  };

  return (
    <div className="nav-bar">
    <nav className="navbar navbar-expand-lg  navbar-light bg-primary">
      <li style={{ marginRight: "30px" }} className="nav-item active">
        <Link style={navstyle} to="/">
          <li>
            <h3>React Todo-app</h3>
          </li>
        </Link>
      </li>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li style={{ marginRight: "30px" }} className="nav-item active">
            <Link style={navstyle} to="/newtodo">
              <li>New</li>
            </Link>
          </li>
          <li style={{ marginRight: "30px" }} className="nav-item">
            <Link style={navstyle} to="/update">
              <li>Update</li>
            </Link>
          </li>
          <li style={{ marginRight: "30px" }} className="nav-item">
            <Link style={navstyle} to="/delete">
              <li>Delete</li>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
