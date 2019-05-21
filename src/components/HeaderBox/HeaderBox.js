import React from "react";
import "./HeaderBox.css";
import Button from "../Button/Button";

function HeaderBox() {
  return (
    <div className="header__box">
      <div className="header__box__inner">
        <span className="header__box__title">
          Find the <br />
          Property for <br />
          rent or sale<span className="header__box__title__dot">.</span>
        </span>
        <span className="header__box__description">
          The largest real estate property database.
        </span>
        <Button text="Advanced Search" />
      </div>
    </div>
  );
}

export default HeaderBox;
