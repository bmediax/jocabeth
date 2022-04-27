import * as navStyles from "../styles/nav.module.scss";

import React from "react";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <a href="#story">Obituary</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#40dias">40 días</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
