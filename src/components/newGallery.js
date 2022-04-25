import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import React from "react";

const Gallery = () => {
  const images = [
    {
      original: "../../gallery/altar-fullview.jpg",
      thumbnail: "../../gallery/altar-fullview_250x375.jpg",
    },
    {
      original: "../../gallery/joca_altar-part.jpg",
      thumbnail: "../../gallery/joca_altar-part_250x166.jpg",
    },
    {
      original: "../../gallery/family_skillsusa.JPG",
      thumbnail: "../../gallery/family_skillsusa_250x166.JPG",
    },
    {
      original: "../../gallery/joca_cooking.jpg",
      thumbnail: "../../gallery/joca_cooking_250x312.jpg",
    },
    {
      original: "../../gallery/joca-hospital.jpeg",
      thumbnail: "../../gallery/joca-hospital_250x312.jpeg",
    },
    {
      original: "../../gallery/joca-kids-small.jpg",
      thumbnail: "../../gallery/joca-kids-small_250x187.jpg",
    },
    {
      original: "../../gallery/joca-kids.JPG",
      thumbnail: "../../gallery/joca-kids_250x166.JPG",
    },
    {
      original: "../../gallery/mom_cooking.jpeg",
      thumbnail: "../../gallery/mom_cooking_250x312.jpeg",
    },
  ];

  return (
    <div id="gallery">
      <ImageGallery
        items={images}
        lazyLoad={true}
        autoPlay={true}
        slideInterval="4000"
      />
    </div>
  );
};

export default Gallery;
