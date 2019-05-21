import React from "react";
import "./SectionDescription.css";

function SectionDescription(props) {
  return (
    <div className="section__description__container">
      <span className="section__description">{props.text}</span>
    </div>
  );
}

export default SectionDescription;
