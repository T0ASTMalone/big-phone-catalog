import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import { ShopContext } from "../../context/BigPhoneCatalogContext";

const Checkout = () => {
  const { state, dispatch } = useContext(ShopContext)
  const history = useHistory();

  const handleRemoveFromCart = (name) => {
    dispatch({type: "REMOVE_FROM_CART", payload: name})
  }

  const handleCheckout = () => {
    dispatch({type: "CHECKOUT"})
    history.push('/');
  }

  return (
    <div>
      <Cart cart={state.cart} removeFromCart={handleRemoveFromCart} />
      <div className="payment-container">
        <button onClick={() => handleCheckout()} className="payment-btn btn">Pay</button>
      </div>
    </div>
  );
};

export default Checkout;
