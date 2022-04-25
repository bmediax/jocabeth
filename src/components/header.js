import * as React from "react";
import * as headerStyles from "../styles/header.module.scss";

import { GiCandleLight } from "react-icons/gi";
import { MdPhotoAlbum } from "react-icons/md";

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
        <a href="#story" className="btn white-outline_active">
          View Story <GiCandleLight />
        </a>
        <a href="#gallery" className="btn white-outline">
          View Gallery <MdPhotoAlbum />
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
