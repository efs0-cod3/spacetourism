import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import "../Tech.css";
export default function Tech(props) {
  const [tech, setTech] = useState(props.techno);
  const [index, setIndex] = useState(0);

  const numbersCircles = tech.map((el, i) => {
    return (
      <div
        key={i}
        className={"tech-circles " + (index === i ? "activeTech" : "")}
        onClick={() => getIndex(i)}
      >
        {i + 1}
      </div>
    );
  });
  function getIndex(e) {
    setIndex(e);
  }
  const techFiltered = tech.filter((el, i) => i === index);

  return (
    <div className="tech-container">
      <MobileNavbar />
      <section className="tech">
        <div>
          <h2 className="launch">
            <span className="launch-bld">03</span> Space Launch 101
          </h2>
        </div>
        {techFiltered.map((el, i) => {
          return (
            <section className="info" key={i}>
              <div className="img-container">
                <img className="tech-img" src={el.images.landscape} />
              </div>
              <div className="circles-container">{numbersCircles}</div>
              <section className="description">
                <h2 className="terminology">The terminology...</h2>
                <h1>{el.name}</h1>
                <p className="desc">{el.description}</p>
              </section>
            </section>
          );
        })}
      </section>
    </div>
  );
}
