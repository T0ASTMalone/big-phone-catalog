import React, { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/BigPhoneCatalogContext";
import { MdShoppingCart } from "react-icons/md";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

const Header = () => {
  const [alternate, setAlternate] = useState(false);

  const refNode = useRef(null);

  useEffect(() => {
    let alt = alternate;
    const interval = setInterval(() => {
      alt = !alt;
      setAlternate(alt);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const {
    state: { cart },
  } = useContext(ShopContext);

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <header className="container">
      <Link className="header-link" to="/">
        <p className="header-brand">Big Phone Catalog</p>
      </Link>
      <Link to="/checkout" className="btn header-link checkout-btn">
        <CSSTransition in={!alternate} timeout={2000} classNames="header-link-icon">
          {(state) => {
            return (
              <MdShoppingCart
                className="cart-icon"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              />
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
        </CSSTransition>
      </Link>
    </header>
  );
};

export default Header;
