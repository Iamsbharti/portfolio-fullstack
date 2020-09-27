import React, { useEffect, useRef, useState } from "react";
import "../../css/Profile.css";
import { navIntro, iconIntro } from "../Animation";

const NavBar = () => {
  /**nav items */
  let navItems = useRef(null);
  let navIcon = useRef(null);
  const [hideMenuBar, toggleMenubar] = useState(true);

  useEffect(() => {
    iconIntro(navIcon);
    navIntro(navItems);
  });

  const handleToggleMenu = () => {
    toggleMenubar(!hideMenuBar);
  };
  return (
    <>
      <div className="mobile_menu_bar">
        <img
          src={process.env.PUBLIC_URL + "/header-icon.png"}
          alt=""
          className="header_icon"
          ref={(el) => {
            navIcon = el;
          }}
        />
        <span className="menu_icon">
          <i
            class="fa fa-bars"
            aria-hidden="true"
            onClick={handleToggleMenu}
          ></i>
        </span>
      </div>
      <div hidden={hideMenuBar}>
        <div className="mobile_div">
          <div className="close_icon" onClick={handleToggleMenu}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <nav>
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
