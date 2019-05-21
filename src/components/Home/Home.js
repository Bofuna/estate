import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
import HouseCard from "../HouseCard/HouseCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionDash from "../SectionDash/SectionDash";
import SectionLink from "../SectionLink/SectionLink";
import SectionDescription from "../SectionDescription/SectionDescription";
import ServiceItem from "../ServiceItem/ServiceItem";

function Home() {
  return (
    <div>
      <Header />
      <section className="section__01">
        <div className="section__01__grid">
          <HouseCard />
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </div>

        <div className="section__01__info section__info">
          <SectionHeader number="01" title={`More for rent \nproperties`} />
          <SectionDash />
          <SectionDescription
            text="Retro occupy organic, stumptown shabby chic pour-over roof party DIY
            normcore. Actually artisan organic occupy, Wes Anderson ugh whatever
            pour-over gastropub selvage."
          />
          <SectionLink route="/renting" text="Find out more &#8594;" />
        </div>
      </section>
      <section className="section__02">
        <div className="section__02__info section__info">
          <SectionHeader
            number="02"
            title={`Best real estate \nproperty services`}
          />
          <SectionDash />
          <SectionDescription text="Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book." />
          <div className="service__grid">
            <ServiceItem
              icon={<i className="fas fa-stopwatch" />}
              name="Fastest Service"
            />
            <ServiceItem
              icon={<i className="fas fa-couch" />}
              name="Property Insurance"
            />
            <ServiceItem
              icon={<i className="fas fa-building" />}
              name="Worldwide Company"
            />
            <ServiceItem
              icon={<i className="fas fa-money-check" />}
              name="Lowest Commission"
            />
          </div>
          <SectionLink route="/service" text="More Services &#8594;" />
        </div>
        <img
          src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          alt="room"
          className="service__image"
        />
      </section>
    </div>
  );
}

export default Home;
