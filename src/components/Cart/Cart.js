import React from "react";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";
import EmptyCart from "./EmptyCart/EmptyCart";
import useFormatCurrency from "../utils/useFormatCurrency";

const Cart = ({ cart, removeFromCart }) => {
  const formatter = useFormatCurrency("en-US", "USD");
  return (
    <table className="cart">
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody className="cart-table-body">
        {cart.length > 0 ? (
          cart.map((c) => <CartItem item={c} removeItem={removeFromCart} />)
        ) : (
          <EmptyCart />
        )}
      </tbody>
      <p>
        {cart.length > 0
          ? formatter.format(cart.reduce((total, current) => total + current.price, 0))
          : formatter.format(0)}
      </p>
    </table>
  );
};

export default Cart;
