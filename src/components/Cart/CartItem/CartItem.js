import React from "react";
import useFormatCurrency from "components/utils/useFormatCurrency";
import "./CartItem.css";
/**
 * Represents CartItem
 */
const CartItem = ({ item, removeItem, style}) => {
  const formatter = useFormatCurrency("en-US", "USD");
  return (
    <li style={style}  className="cart-item">
      <div className="item-controls">
        <div className="cart-item-img">
          <p className="phone-card-text">{item.brand}</p>
        </div>
        {/* Removes Item from cart */}
        <button onClick={() => removeItem(item.brand)} className="remove-btn btn">
          Remove
        </button>
      </div>
      {/* Item price */}
      <div className="item-info">
        <h3>{formatter.format(item.price)}</h3>
      </div>
    </li>
  );
};

export default CartItem;
