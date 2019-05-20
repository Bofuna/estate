import React from "react";
import "./CarouselArrow.css";

function CarouselArrow({ direction, clickFunction, glyph }) {
  return (
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
      {glyph}
    </div>
  );
}

export default CarouselArrow;
