import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./main.css";

export default ({ children }) => {
  return <Carousel>{children}</Carousel>;
};
