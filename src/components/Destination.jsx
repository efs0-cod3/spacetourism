import React, { useEffect, useState } from "react";
import '../Destination.css'
import MobileNavbar from "./MobileNavbar";

export default function Moon(props) {
  const [destinations, setDestinations] = useState(props.data);

  const [index, setIndex] = useState(0);

  const locations = destinations.map((destination, i) => {
    return (
      <li
        className={"locations-names " + (index === i ? "active_des" : "")}
        key={i}
        onClick={() => getName(i)}
      >
        {destination.name}
      </li>
    );
  });

  const eachElements = destinations.filter((el, i) => i === index);

  function getName(e) {
    setIndex(e);
  }

  return (
    <div className="moon_container">
      <MobileNavbar />
      <div className="moon">
        <h2 className="pick">
          <span className="moon-bld">01</span> Pick your destination
        </h2>
        {
          eachElements.map(el => {
            return (
              <div className="destinations">
          <img
            className="location-img"
            src={el.images.png}
          />
          <ul className="locations">{locations}</ul>
          <section className="destination-info">
            <h1 className="destination-h1">{el.name}</h1>
            <p className="destination-description">{el.description}</p>
          </section>
          <section className="distance">
            <div>
              <p className="detail">avg. distance</p>
              <h2 className="travelDist">{el.distance}</h2>
            </div>
            <div>
              <p className="detail">Est. Travel Time</p>
              <h2 className="travelDist">{el.travel}</h2>
            </div>
          </section>
        </div>
            )
          })
        }
      </div>
    </div>
  );
}
