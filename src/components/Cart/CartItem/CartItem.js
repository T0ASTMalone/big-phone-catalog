import React from "react";
import "./CartItem.css";

const CartItem = ({ item, removeItem }) => {
  return (
    <tr className="cart-item">
      <td className="item-controls">
        <span className="phone-picture">{item.brand}</span>
        <button onClick={() => removeItem(item.brand)} className="remove-btn btn">
          Remove
        </button>
      </td>
      <td className="item-info">{item.price}</td>
    </tr>
  );
};

export default CartItem;