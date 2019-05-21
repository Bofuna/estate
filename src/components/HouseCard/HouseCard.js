import React from "react";
import "./HouseCard.css";
import { Link } from "react-router-dom";

function HouseCard() {
  return (
    <div className="housecard">
      <img
        src="https://images.unsplash.com/photo-1526568929-7cdd510e77fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2682&q=80"
        alt="house"
        className="housecard__image"
      />
      <button className="housecard__like">
        <i className="far fa-heart housecard__like__icon" />
      </button>
      <div className="housecard__details__container">
        <div className="housecard__details">
          <span className="housecard__price">$498.58</span>
          <div className="housecard__info">
            <span className="housecard__place">Purwokerto</span>
            &ensp;&mdash;&ensp;
            <Link to="/more" className="housecard__more">
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
