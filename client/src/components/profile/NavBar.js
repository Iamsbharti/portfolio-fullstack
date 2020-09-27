import React, { useEffect, useRef } from "react";
import "../../css/Profile.css";
import { navIntro, iconIntro } from "../Animation";

const NavBar = () => {
  /**nav items */
  let navItems = useRef(null);
  let navIcon = useRef(null);

  useEffect(() => {
    iconIntro(navIcon);
    navIntro(navItems);
  });
  return (
    <>
      <div className="mobile_div">
        <div className="close_icon">X</div>
        <nav>
          <img
            src={process.env.PUBLIC_URL + "/header-icon.png"}
            alt=""
            className="header_icon"
            ref={(el) => {
              navIcon = el;
            }}
          />
          <ul
            className="nav__links__mob"
            ref={(el) => {
              navItems = el;
            }}
          >
            <li>Services</li>
            <li>Works</li>
            <li>Blog</li>
            <li>Contact Me</li>
          </ul>
        </nav>
      </div>
      <div className="non_mobile">
        <nav>
          <img
            src={process.env.PUBLIC_URL + "/header-icon.png"}
            alt=""
            className="header_icon"
            ref={(el) => {
              navIcon = el;
            }}
          />
          <ul
            className="nav__links"
            ref={(el) => {
              navItems = el;
            }}
          >
            <li>Services</li>
            <li>Works</li>
            <li>Blog</li>
            <li>Contact Me</li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
