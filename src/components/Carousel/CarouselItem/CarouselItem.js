import React from "react";
import useFormatCurrency from "../../utils/useFormatCurrency";
import "./CarouselItem.css";

const CarouselItem = ({ item, handleAddItem, inCart }) => {
  const formatter = useFormatCurrency('en-US', 'USD')

  return (
    <div className="carousel-item">
      <div className={"phone-card " + (inCart ? "selected" : "")}>
        <p className="phone-card-text">{item.brand}</p>
      </div>
      <div className="carousel-item-controls-container">
        <button onClick={() => !inCart && handleAddItem(item)} className="add-to-cart-btn btn clickable carousel-item-controls">Add</button>
        <span className="carousel-item-controls">{formatter.format(item.price)}</span>
      </div>
    </div>
  );
};

export default CarouselItem;
