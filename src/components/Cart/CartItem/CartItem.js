import React from 'react'

const CartItem = () => {
  return (
    <tr>
      <td className="item-controls">
        <span className="phone-picture">
          Phone 1
        </span>
        <button className="remove-btn btn">
          Remove
        </button>
      </td>
      <td className="item-info">
        $199
      </td>
    </tr>
  )
}

export default CartItem
