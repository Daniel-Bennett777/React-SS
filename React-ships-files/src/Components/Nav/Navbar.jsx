import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/ships">Ships</Link>
      </li>
      <li className="navbar-item">
        <Link to="/haulers">Haulers</Link>
      </li>
      <li className="navbar-item">
        <Link to="/docks">Docks</Link>
      </li>
      <li className="navbar-item">
        <Link to="/home">Home</Link>
      </li>
    </ul>
  );
};