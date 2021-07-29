import React from 'react'
import CartItem from './CartItem/CartItem'
import './Cart.css'

const Cart = ({cart, removeFromCart}) => {
  return (
    <table className="cart">
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {cart.length > 0 && cart.map(c => <CartItem item={c} removeItem={removeFromCart} />)}
      </tbody>
    </table>
  )
}

export default Cart
