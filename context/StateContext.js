//Contains all the logic for the cart itemss 
import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from 'react-hot-toast'; //For making the pop-up notification 

const Context = createContext(); //Hook

export const StateContext = ({ children }) => { 
    const [showCart, setShowCart] = useState(false); //'false' shows the initail property for the state 

    const [cartItems, setCartItems] = useState(); //Cart items using 'Local Storage'

    const [totalPrice, setTotalPrice] = useState(); //Total price of the cart

    const [totalQuantities, setTotalQuantities] = useState(); //Total quantity of the cart

    const [qty, setQty] = useState(1); //Quantity

    //Logic for increasing cart item + 
    const increaseQuantity = () => { 
        setQty((prevQty) => prevQty + 1);
    }
    //Logic for decreasing cart item -
    const decreaseQuantity = () => { 
        setQty((prevQty) => { 
            if(prevQty - 1 < 1) return 1; 
            else 
            return prevQty - 1;
        });
    }

    return( 
        //Returning Context Provider
        <Context.Provider 
        vlaue={{ 
            //Passing values across entire application
            showCart, 
            cartItems, 
            totalPrice, 
            totalQuantities, 
            qty, 
            increaseQuantity, 
            decreaseQuantity,
        }}
        > 
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context);