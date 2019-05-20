import React from "react";
import "./HeaderBox.css";
import Button from "../Button/Button";

function HeaderBox() {
  return (
    <div className="headerbox">
      <div className="headerbox__inner">
        <span className="headerbox__title">
          Find the <br />
          Property for <br />
          rent or sale<span className="headerbox__title__dot">.</span>
        </span>
        <span className="headerbox__description">
          The largest real estate property database.
        </span>
        <Button text="Advanced Search" />
      </div>
    </div>
  );
}

export default HeaderBox;
