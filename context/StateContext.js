//Contains all the logic for the cart itemss
import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast"; //For making the pop-up notification

const Context = createContext(); //Hook

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false); //'false' shows the initail property for the state

  const [cartItems, setCartItems] = useState(); //Cart items using 'Local Storage'

  const [totalPrice, setTotalPrice] = useState(); //Total price of the cart

  const [totalQuantities, setTotalQuantities] = useState(); //Total quantity of the cart

  const [qty, setQty] = useState(1); //Quantity

  //Function - Logic for increasing cart item +
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  //Function - Logic for decreasing cart item -
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    //Returning Context Provider
    <Context.Provider
      value={{
        //Passing values across entire application
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
