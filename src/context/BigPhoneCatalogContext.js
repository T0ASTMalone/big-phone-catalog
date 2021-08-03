
import React, { useReducer } from "react";

const initialState = {
  error: null,
  cart: []
};

export const ShopContext = React.createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "INCR":
      return { ...state, count: action.payload };
    case "ADD_TO_CART":
      return {...state, cart : [...state.cart, action.payload]}
    case "REMOVE_FROM_CART":
      return {...state, cart : [...state.cart.filter(c => c.brand !== action.payload)]}
    case "CHECKOUT":
      return {...state, cart: []}
    default:
      return state;
  }
};

export const ShopProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ShopContext.Provider>
  );
};