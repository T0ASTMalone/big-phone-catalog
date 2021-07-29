import React from "react";
import useFormatCurrency from "../../utils/useFormatCurrency";
import "./CartItem.css";

const CartItem = ({ item, removeItem }) => {
  const formatter = useFormatCurrency('en-US', 'USD')
  return (
    <tr className="cart-item">
      <td className="item-controls">
        <div className="cart-item-img">
          <span className="phone-picture">{item.brand}</span>
        </div>
        <button onClick={() => removeItem(item.brand)} className="remove-btn btn">
          Remove
        </button>
      </td>
      <td className="item-info">{formatter.format(item.price)}</td>
    </tr>
  );
};

export default CartItem;
