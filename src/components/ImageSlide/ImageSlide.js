import React from "react";
import "./ImageSlide.css";

function ImageSlide({ url }) {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return <div className="image-slide" style={styles} />;
}

export default ImageSlide;
