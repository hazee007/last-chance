import Carousel from "react-multi-carousel";
import { styled } from "@mui/material";

import Banner from "../assets/images/Banner.jpg";
import Banner_2 from "../assets/images/Banner_2.jpg";

import "react-multi-carousel/lib/styles.css";

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const images = [Banner, Banner_2];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1, // Set to 1 for one image at a time
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1, // Set to 1 for one image at a time
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Set to 1 for one image at a time
    slidesToSlide: 1,
  },
};

export default function ImageAutomation() {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      arrows={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      // keyBoardControl={true}
      // customTransition="all .10"
      // transitionDuration={100}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {images.map((image, index) => (
        <div key={index}>
          <StyledImage src={image} alt={`banner ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}
