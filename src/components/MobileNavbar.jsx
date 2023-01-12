import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function MobileNavbar() {
  const [show, setShow] = useState(false);
  function showMenu() {
    setShow((prevValue) => !prevValue);
  }

  return (
    <nav className="navbar">
      <Link to={'/'}><img src="/assets/shared/logo.svg" alt="logo-img" /></Link>
      <div className="mobile">
        <img
          onClick={showMenu}
          className={show ? "hidden-ham" : "ham-icon"}
          src="/assets/shared/icon-hamburger.svg"
          alt="manu-icon"
        />
        <div className={"backg " + (show ? "show-menu" : "hide-menu")}>
          <img
            className="close-icon"
            onClick={showMenu}
            src="/assets/shared/icon-close.svg"
            alt="manu-icon"
          />
          <ul className="mobile_menu--list">
            <li>
              <Link to={"/"}>
                <span className="bld">00</span>Home
              </Link>
            </li>
            <li>
              <Link to={"/Destinations"}>
                <span className="bld">01</span> Destinations
              </Link>
            </li>
            <li>
              <Link to={"/Crew"}>
                <span className="bld">02</span>Crew
              </Link>
            </li>
            <li>
              <Link to={"/Technologies"}>
                <span className="bld">03</span>Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
