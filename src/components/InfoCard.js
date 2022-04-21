import React from "react";

const InfoCard = ({ title, link, linkText }) => {
  return (
    <div className="infoCard">
      <h3>{title}</h3>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
      >
        {linkText}
      </a>
    </div>
  );
};

export default InfoCard;
