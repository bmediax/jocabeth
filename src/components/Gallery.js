import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import React from "react";
import Section from "./Section";
import { StaticImage } from "gatsby-plugin-image";

const Gallery = () => {
  return (
    <Section title="Galería / Gallery" id="gallery">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter=".5em">
          <StaticImage alt="Joca" src="../images/gallery/altar-fullview.jpg" />
          <StaticImage alt="Joca" src="../images/gallery/altar-verticle.jpg" />
          <StaticImage alt="Joca" src="../images/gallery/joca_altar-part.jpg" />
          <StaticImage alt="Joca" src="../images/gallery/joca_cooking.jpg" />
          <StaticImage alt="Joca" src="../images/gallery/joca_front.jpg" />
          <StaticImage
            alt="Joca"
            src="../images/gallery/joca-altar-topview.jpg"
          />
          <StaticImage alt="Joca" src="../images/gallery/joca_front.jpg" />
          <StaticImage alt="Joca" src="../images/gallery/joca-kids-small.jpg" />
          <StaticImage
            alt="Joca"
            src="../images/gallery/family_skillsusa.JPG"
          />
          <StaticImage alt="Joca" src="../images/gallery/mom_cooking.jpeg" />
          <StaticImage alt="Joca" src="../images/gallery/mom-laugh.JPG" />
          <StaticImage alt="Joca" src="../images/gallery/momandbrian.jpg" />
          <StaticImage alt="Joca" src="../images/gallery/joca-kids.JPG" />
          <StaticImage alt="Joca" src="../images/gallery/mom.jpg" />
          <StaticImage alt="Joca" src="../images/gallery/joca-hospital.jpeg" />
          <StaticImage
            alt="Joca"
            src="../images/gallery/family-skillsusa-pic.JPG"
          />
        </Masonry>
      </ResponsiveMasonry>
    </Section>
  );
};

export default Gallery;