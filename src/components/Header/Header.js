import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/BigPhoneCatalogContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const {
    state: { cart },
  } = useContext(ShopContext);

  return (
    <header className="container">
      {/* Brand */}
      <Link className="header-link" to="/big-phone-catalog">
        <h3 className="header-brand">Big Phone Catalog</h3>
      </Link>
      <Link to="/big-phone-catalog/checkout" className="btn header-link checkout-btn">
        {/* Cart Icon */}
        <FaShoppingCart className="cart-icon" />
        {/* Current Cart Size */}
        <span className="cart-size">{cart.length}</span>
      </Link>
    </header>
  );
};

export default Header;
