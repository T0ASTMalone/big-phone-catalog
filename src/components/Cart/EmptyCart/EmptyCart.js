import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <p>Nothing to See Here</p>
      <Link to="/big-phone-catalog" className="btn header-link">Back to Catalog</Link>
    </div>
  );
};

export default EmptyCart;
