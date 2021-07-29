import React, { useContext, useState } from "react";
import CarouselItem from "./CarouselItem/CarouselItem";
import "./Carousel.css";
import { ShopContext } from "../../context/BigPhoneCatalogContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Carousel = ({ catalog, handleUpdatePage, page }) => {
  const { dispatch } = useContext(ShopContext);

  const handleAddToCart = (item) => {
    // TODO: prevent same item from adding to cart if already exists or simply 
    // update quantity in cart
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div className="carousel">
      <button onClick={() => handleUpdatePage(page - 1)} id="backward" className="carousel-control">
        <MdKeyboardArrowLeft/>
      </button>
      <div className="carousel-item-container">
        {catalog !== null &&
          catalog.results.map((r, i) => (
            <CarouselItem key={i} item={r} handleAddItem={handleAddToCart} />
          ))}
      </div>
      <button onClick={() => handleUpdatePage(page + 1)} id="forward" className="carousel-control">
        <MdKeyboardArrowRight/>
      </button>
    </div>
  );
};

export default Carousel;
