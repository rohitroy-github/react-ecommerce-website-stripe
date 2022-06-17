//Contains all the logic for the cart itemss
import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast"; //For making the pop-up notification

const Context = createContext(); //Hook

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false); //'false' shows the initail property for the state

  const [cartItems, setCartItems] = useState([]); //Cart items using 'Local Storage'

  const [totalPrice, setTotalPrice] = useState(0); //Total price of the cart

  const [totalQuantities, setTotalQuantities] = useState(0); //Total quantity of the cart

  const [qty, setQty] = useState(1); //Quantity

 let foundProduct; 
 let index; 

  //Function to AddToCart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      //Checking if the item we are currently trying to add to cart is already in cart or not ?
      //Yes
      //Updating actual items in cart
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            //Incrementing the quantity of that particular product
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      //No
      //If the product we are trying to add is not already present in the cart
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    //Showing the pop-up notification
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const toggleCartQuantity = (id, value) => { 
    foundProduct = cartItems.find((item) => item._id === id); 
    index = cartItems.findIndex((product) => product._id === id);

    if(value == 'inc') { 
        setCartItems([...cartItems, { ...foundProduct, quantity: foundProduct.quantity + 1} ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price ); 
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1 );
    }
    else if(value === 'dec') { 
        if(foundProduct.quantity > 1) { 
            setCartItems([...cartItems, { ...foundProduct, quantity: foundProduct.quantity - 1} ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price ); 
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1 );
        }
    }
  }
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
        onAdd,
        setShowCart,
        totalQuantities,
        showCart,
        cartItems,
        toggleCartQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
