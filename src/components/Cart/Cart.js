import React from 'react'
import CartItem from './CartItem/CartItem'

const Cart = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </tbody>
    </table>
  )
}

export default Cart
