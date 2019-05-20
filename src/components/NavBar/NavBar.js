import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Button from "../Button/Button";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo__container">
          <span className="navbar__logo__name">Real Estate</span>
          <i className="fas fa-door-open navbar__logo" />
        </Link>
        <ul className="navbar__menu">
          <li>
            <Link to="/buying">Buying</Link>
          </li>
          <li>
            <Link to="/selling">Selling</Link>
          </li>
          <li>
            <Link to="/renting">Renting</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ressource">Ressource</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar__button">
          <Button text="Sign Up" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
