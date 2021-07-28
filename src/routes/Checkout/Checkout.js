import React from 'react'
import Cart from '../../components/Cart/Cart'

const Checkout = () => {
    // useState to get cart

    return (
        <div>
          <Cart />
          <div className="payment-container">
            <button className="payment-btn btn">
              Pay
            </button>
          </div>
        </div>
    )
}

export default Checkout
