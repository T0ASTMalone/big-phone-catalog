import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/BigPhoneCatalogContext";
import "./Header.css";
// import { CSSTransition } from "react-transition-group";
import { FaShoppingCart } from "react-icons/fa";
// import ShoppingCartIcon from "../../assets/cart-11-48.png";

/* 
  Tied to add add an animation that would alternate between an icon and the cart length.
  It was not breaking the page but was showing an error in the console.
*/

const Header = () => {

  // const [alternate, setAlternate] = useState(false);

  // useEffect(() => {
  //   let alt = false;
  //   const interval = setInterval(() => {
  //     alt = !alt;
  //     setAlternate(alt);
  //   }, 4000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const {
    state: { cart },
  } = useContext(ShopContext);

  // const duration = 300;

  // const defaultStyle = {
  //   transition: `opacity ${duration}ms ease-in-out`,
  //   opacity: 0,
  // };

  // const transitionStyles = {
  //   entering: { opacity: 1 },
  //   entered: { opacity: 1 },
  //   exiting: { opacity: 0 },
  //   exited: { opacity: 0 },
  // };

  return (
    <header className="container">
      <Link className="header-link" to="/big-phone-catalog">
        <p className="header-brand">Big Phone Catalog</p>
      </Link>
      <Link to="/big-phone-catalog/checkout" className="btn header-link checkout-btn">
        {/* Causing ref error but should alternate between cart icon and cart size */}
        {/* <CSSTransition in={!alternate} timeout={2000} classNames="header-link-icon">
          {(state) => {
            return (
              <FaShoppingCart
                className="cart-icon"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              />
              <img src={ShoppingCartIcon} style={{width: "20px"}} alt="cart"/>
            );
          }}
        </CSSTransition>
        <CSSTransition in={alternate} timeout={2000} classNames="header-link-icon">
          {(state) => {
            return (
              <span
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
                className="cart-size"
              >
                {cart.length}
              </span>
            );
          }}
        </CSSTransition> */}
        <FaShoppingCart className="cart-icon" />
        <span className="cart-size">{cart.length}</span>
      </Link>
    </header>
  );
};

export default Header;
