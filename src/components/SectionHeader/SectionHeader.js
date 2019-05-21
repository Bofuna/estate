import React from "react";
import "./SectionHeader.css";

function SectionHeader({ number, title }) {
  return (
    <div className="section__header">
      <header className="section__header__number">{number}</header>
      <span className="section__header__title">
        {title}
        <span className="section__header__title__dot">.</span>
      </span>
    </div>
  );
}

export default SectionHeader;
