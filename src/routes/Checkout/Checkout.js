import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";
import { ShopContext } from "../../context/BigPhoneCatalogContext";

const PAGE_SIZE = 3;
/**
 * Checkout page
 * @returns 
 */
const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(ShopContext);

  const history = useHistory();
  const [page, setPage] = useState(0);
  const [cartPage, setCartPage] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleRemoveFromCart = (name) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: name });
  };

  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
    history.push("/big-phone-catalog/");
  };

  useEffect(() => {
    const lastIndex = (page <= 0 ? 1 : page) * PAGE_SIZE;
    const newCart = cart.slice(0, lastIndex);

    setLoaded(lastIndex >= cart.length);
    setCartPage(newCart);
  }, [cart]);

  useEffect(() => {
    setCartPage(cart.slice(0, 3));
  }, []);

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
