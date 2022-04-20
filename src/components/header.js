import * as React from "react";
import * as headerStyles from "../styles/header.module.scss";

import { AiFillHeart } from 'react-icons/ai';
import { BiTimeFive } from "react-icons/bi";

const Header = () => (
  <header id={headerStyles.header}>
    <div className={headerStyles.content}>
      <div className={headerStyles.title}>
        <span className={headerStyles.name}>Jocabeth's</span>{" "}
        <span className={headerStyles.memorial}>Memorial</span>
      </div>
      <div className={headerStyles.btnGroup}>
        <a href="#schedule" className="btn white-outline">
          View Schedule <BiTimeFive />
        </a>
        <a
          href="https://www.gofundme.com/f/jocabeth"
          className="btn white-outline"
          target="_blank"
          rel="noreferrer"
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
