import * as React from "react";
import * as headerStyles from "../styles/header.module.scss";

import { AiFillHeart } from "react-icons/ai";
import { GiCandleLight } from "react-icons/gi";

const Header = () => (
  <header id={headerStyles.header}>
    <div className={headerStyles.content}>
      <div className={headerStyles.title}>
        <span className={headerStyles.name}>Jocabeth's</span>{" "}
        <span className={headerStyles.memorial}>Memorial</span>
        <span className={headerStyles.date}>
          July 25, 1980 – April 15, 2022
        </span>
      </div>
      <div className={headerStyles.btnGroup}>
        <a href="#40dias" className="btn white-outline_active">
          View 40 Días <GiCandleLight />
        </a>
        <a
          href="https://www.gofundme.com/f/jocabeth"
          target="blank"
          rel="noreferrer"
          className="btn white-outline"
        >
          Donate Now <AiFillHeart />
        </a>
      </div>
    </div>
  </header>
);

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
