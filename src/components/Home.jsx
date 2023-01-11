import React from "react";
import MobileNavbar from "./MobileNavbar";
import '../Home.css'

export default function Home() {
  return (
    <div className="home">
        <MobileNavbar />
      <div className="home-info">
        <h2 className="home-h2">So, you want to travel to</h2>
        <h1>Space</h1>
        <p className="home-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <button className="explore-btn">Explore</button>
      </div>
    </div>
  );
}
