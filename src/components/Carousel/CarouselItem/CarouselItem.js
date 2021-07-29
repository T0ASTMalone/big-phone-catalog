import React, { useContext } from "react";
import { ShopContext } from "../../../context/BigPhoneCatalogContext";
import "./CarouselItem.css";

const CarouselItem = ({ item, handleAddItem }) => {
  return (
    <div className="carousel-item">
      <div className="phone-card">
        <p>{item.brand}</p>
      </div>
      <div className="carousel-item-controls">
        <button onClick={() => handleAddItem(item)} className="add-to-cart-btn">Add</button>
        <span>{item.price}</span>
      </div>
    </div>
  );
};

export default CarouselItem;
