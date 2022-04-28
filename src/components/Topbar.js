import * as TopbarStyles from "../styles/Topbar.module.scss";

import React from "react";

const TopBar = ({ title, link, content, btnText }) => {
  return (
    <div className={TopbarStyles.container}>
      <div className={TopbarStyles.wrapper}>
        <div className={TopbarStyles.text}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <a className={`${TopbarStyles.link} `} href={link}>
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default TopBar;
