import React from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import "./Carousel.css";

const Carousel = ({ catalog }) => {
  return (
    <div className="carousel">
      {/* Carousel Controls */}
      <button id="backward" className="carousel-control">
        Back
      </button>
      <div className="carousel-item-container">
        {catalog !== null && catalog.results.map((r, i) => <CarouselItem key={i} item={r} />)}
      </div>
      <button id="forward" className="carousel-control">
        Forward
      </button>
    </div>
  );
};

export default Carousel;
