import React from "react";
import "./Header.css";
import HeaderBox from "../HeaderBox/HeaderBox";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

function Header() {
  return (
    <div className="header">
      <HeaderBox />
      <div className="header__carousel">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default Header;
