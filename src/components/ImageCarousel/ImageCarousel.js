import React, { useState } from "react";
import "./ImageCarousel.css";
import ImageSlide from "../ImageSlide/ImageSlide";
import CarouselArrow from "../CarouselArrow/CarouselArrow";

const imgUrls = [
  "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
  "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
  "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
  "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
  "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

function ImageCarousel() {
  const [imageIndex, setImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = imageIndex === 0;
    const index = shouldResetIndex ? lastIndex : imageIndex - 1;

    setImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = imageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : imageIndex + 1;

    setImageIndex(index);
  };

  return (
    <div className="imagecarousel">
      <CarouselArrow
        direction="left"
        clickFunction={previousSlide}
        glyph="&#9664;"
      />
      <ImageSlide url={imgUrls[imageIndex]} />
      <CarouselArrow
        direction="right"
        clickFunction={nextSlide}
        glyph="&#9654;"
      />
    </div>
  );
}

export default ImageCarousel;
