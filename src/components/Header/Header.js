import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/BigPhoneCatalogContext";
import "./Header.css";

const Header = () => {
  const {state} = useContext(ShopContext)
  return (
    <header>
      <p>Big Phone Catalog</p>
      <Link to="/checkout">Cart <span>{state.cart.length}</span></Link>
    </header>
  );
};

export default Header;
