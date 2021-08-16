import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cart from "components/Cart/Cart";
import EmptyCart from "components/Cart/EmptyCart/EmptyCart";
import { ShopContext } from "context/BigPhoneCatalogContext";
const PAGE_SIZE = 3;

/**
 * Checkout page
 */
const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(ShopContext);

  const history = useHistory();
  // keeps track of the current page
  const [page, setPage] = useState(0);
  // keeps track of the current cart items
  const [cartPage, setCartPage] = useState([]);
  // indicates if the cart has been completely loaded
  const [loaded, setLoaded] = useState(false);

  const handleRemoveFromCart = (name) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: name });
  };

  // clears cart and redirects back to catalog
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
    history.push("/big-phone-catalog/");
  };

  // once first page is loaded then the last and 
  useEffect(() => {
    const lastIndex = (page <= 0 ? 1 : page) * PAGE_SIZE;
    const newCart = cart.slice(0, lastIndex);

    setLoaded(lastIndex >= cart.length);
    setCartPage(newCart);
  }, [cart]);
  
  // will fetch first page of cart to avoid loading all at once 
  useEffect(() => {
    setCartPage(cart.slice(0, 3));
  }, []);

  // Will fetch the next section of the cart
  const handleNextSection = (newPage) => {
    let from = newPage * PAGE_SIZE;
    let to = from + PAGE_SIZE;
    let nextPage = cart.slice(0, to);

    setPage(newPage);
    setCartPage([...nextPage]);

    if (to >= cart.length) {
      setLoaded(true);
    }
  };

  // gets the cart total price
  // should be part of initial response when fetching the cart
  const getTotal = () => {
    return cart.reduce((total, current) => total + current.price, 0);
  };

  return (
    <div>
      {cart.length > 0 ? (
        <>
          <Cart
            cart={cartPage}
            handleNextSection={handleNextSection}
            loaded={loaded}
            page={page}
            removeFromCart={handleRemoveFromCart}
            total={getTotal()}
          />
          <div className="payment-container">
            <button onClick={() => handleCheckout()} className="payment-btn btn">
              Pay
            </button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Checkout;
