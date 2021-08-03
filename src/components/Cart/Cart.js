import React from "react";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";
import useFormatCurrency from "../utils/useFormatCurrency";

const Cart = ({ cart, removeFromCart, page, handleNextSection, loaded, total }) => {
  const formatter = useFormatCurrency("en-US", "USD");

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-header-item">
          <h3>Item</h3>
        </div>
        <div className="cart-header-item">
          <h3>Cost</h3>
        </div>
      </div>
      <ol className="cart-items">
        {cart.map((c, i) => (
          <CartItem item={c} key={i} removeItem={removeFromCart} />
        ))}
      </ol>

      {!loaded && (
        <button className="show-more btn" onClick={() => handleNextSection(page + 1)}>
          Show More
        </button>
      )}

      <p className="price">{formatter.format(total)}</p>
    </div>
  );
};

export default Cart;
