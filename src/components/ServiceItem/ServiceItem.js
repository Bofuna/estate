import React from "react";
import "./ServiceItem.css";

function ServiceItem(props) {
  return (
    <div className="service__item">
      <div className="service__icon">{props.icon}</div>
      <span className="service__name">{props.name}</span>
    </div>
  );
}

export default ServiceItem;
