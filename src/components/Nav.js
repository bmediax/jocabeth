import * as navStyles from "../styles/nav.module.scss";

import React from "react";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <a href="#story">Story</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#thanku">Thank You</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;