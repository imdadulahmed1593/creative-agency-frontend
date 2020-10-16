import React from "react";

import { Carousel } from "react-bootstrap";
function Portfolio() {
  return (
    <div
      style={{ background: "#111430", color: "#fff" }}
      className="mt-5 mb-5 p-5 portfolio"
    >
      <h1 className="m-5 p-5 text-center">Here are some of our works</h1>
      <Carousel className="mb-5 pb-5">
        <Carousel.Item>
          <img
            className="carousel-img img-fluid pb-5 d-block w-40"
            src={require("../../images/carousel-1.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img img-fluid pb-5 d-block w-40"
            src={require("../../images/carousel-2.png")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img img-fluid pb-5 d-block w-40"
            src={require("../../images/carousel-3.png")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img img-fluid pb-5 d-block w-40"
            src={require("../../images/carousel-4.png")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img img-fluid pb-5 d-block w-40"
            src={require("../../images/carousel-5.png")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Portfolio;
// onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
