import React from "react";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";
import EmptyCart from "./EmptyCart/EmptyCart";

const Cart = ({ cart, removeFromCart }) => {
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
    </table>
  );
};

export default Cart;
