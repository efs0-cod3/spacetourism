import React, { useState, useEffect } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

export default function MobileNavbar() {
  const [show, setShow] = useState(false);
  const [menuName, setMenuName] = useState('HOME')

  function showMenu() {
    setShow((prevValue) => !prevValue);
  }

  function menuActive(e){
    setMenuName(prevName => prevName = e.target.innerText)
  }

  

  return (
    <nav className="navbar">
      <Link className="logo" to={'/'}><img src="/assets/shared/logo.svg" alt="logo-img" /></Link>
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
              <NavLink onClick={menuActive} to={"/"}>
            <li className={menuName == 'HOME' ? 'li-active' : ''}>
                <span className="bld">00</span>Home
            </li>
              </NavLink>
              <NavLink onClick={menuActive} to={"/Destinations"}>
            <li  className={menuName == 'DESTINATIONS' ? 'li-active' : ''}>
                <span className="bld">01</span> Destinations
            </li>
              </NavLink>
              <NavLink onClick={menuActive} to={"/Crew"}>
            <li  className={menuName === 'CREW' ? 'li-active' : ''}>
                <span className="bld">02</span>Crew
            </li>
              </NavLink>
              <NavLink onClick={menuActive} to={"/Technologies"}>
            <li  className={menuName === 'TECHNOLOGY' ? 'li-active' : ''}>
                <span className="bld">03</span>Technology
            </li>
              </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
