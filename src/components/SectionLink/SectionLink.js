import React from "react";
import { Link } from "react-router-dom";
import "./SectionLink.css";

function SectionLink(props) {
  return (
    <Link to={props.route} className="section__link">
      {props.text}
    </Link>
  );
}

export default SectionLink;
