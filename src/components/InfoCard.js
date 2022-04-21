import React from "react";

const InfoCard = ({ title, link, linkText, mapSrc }) => {
  return (
    <div className="infoCard">
      <h3>{title}</h3>
      <a target="_blank" rel="noreferrer" href={link}>
        {linkText}
      </a>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="250"
            id="gmap_canvas"
            src={mapSrc}
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

{
  /* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */
}
