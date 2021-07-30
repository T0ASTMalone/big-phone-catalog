import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/BigPhoneCatalogContext";
import { MdShoppingCart } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const [alternate, setAlternate] = useState(false)  // TODO: add styles to slightly shrink header on scroll
  const {state: {cart}} = useContext(ShopContext)

  useEffect(() => {
    setInterval(() => {
      console.log("running alternate");
      setAlternate(!alternate)
    }, 2000)
  }, [])

  return (
    <header className="container">
      <p className="header-brand">Big Phone Catalog</p>
      <Link to="/checkout" className="btn "><MdShoppingCart/> <span>{cart.length}</span></Link>
    </header>
  );
};

export default Header;
