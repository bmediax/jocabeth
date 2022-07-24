import * as React from "react";
import * as headerStyles from "../styles/header.module.scss";

import { AiFillHeart } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";

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
        <a href="#gallery" rel="noreferrer" className="butn white-outline">
          View Gallery <GrGallery />
        </a>
        <a
          href="https://www.lupus.org/resources/what-is-lupus"
          className="butn white-outline_active"
        >
          What is Lupus <AiFillHeart />
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
