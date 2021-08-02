import React from "react";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";
import EmptyCart from "./EmptyCart/EmptyCart";
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
        {cart.length > 0 ? (
          cart.map((c, i) => <CartItem item={c} key={i} removeItem={removeFromCart} />)
        ) : (
          <EmptyCart />
        )}
      </ol>

      {!loaded && cart.length > 0 && (
        <button className="show-more btn" onClick={() => handleNextSection(page + 1)}>
          Show More
        </button>
      )}

      <p className="price">{cart.length > 0 ? formatter.format(total) : ""}</p>
    </div>
  );
};

export default Cart;
