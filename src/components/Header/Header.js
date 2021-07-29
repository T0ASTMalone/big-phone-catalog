import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/BigPhoneCatalogContext";
import { MdShoppingCart } from "react-icons/md";
import "./Header.css";

const Header = () => {
  // TODO: add styles to slightly shrink header on scroll
  const {state} = useContext(ShopContext)
  return (
    <header>
      <p>Big Phone Catalog</p>
      <Link to="/checkout"><MdShoppingCart/> <span>{state.cart.length}</span></Link>
    </header>
  );
};

export default Header;
