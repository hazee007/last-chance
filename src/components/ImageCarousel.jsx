import React from "react";
import Carousel from "react-multi-carousel";
import styled from "@emotion/styled";

import useResponsive from "../hooks/useResponsive";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 2400 },
    items: 6,
  },
  largeDesktop: {
    breakpoint: { max: 2400, min: 2000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  small: {
    breakpoint: { max: 800, min: 400 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
  },
};

const arrowStyle = {
  top: "100px",
};

const CustomRight = ({ onClick }) => (
  <button
    className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
    onClick={onClick}
    style={arrowStyle}
  />
);
const CustomLeft = ({ onClick }) => (
  <button
    className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
    onClick={onClick}
    style={arrowStyle}
  />
);

const CustomCarousel = styled(Carousel)({
  height: 350,
});

export default function ImageCarousel({ children }) {
  const smDown = useResponsive("down", "sm");
  return (
    <CustomCarousel
      responsive={responsive}
      slidesToSlide={smDown ? 1 : 3}
      swipeable={true}
      customRightArrow={<CustomRight />}
      customLeftArrow={<CustomLeft />}
    >
      {children}
    </CustomCarousel>
  );
}
