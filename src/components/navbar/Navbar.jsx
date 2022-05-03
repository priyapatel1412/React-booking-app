import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Leisure Inn.</span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
