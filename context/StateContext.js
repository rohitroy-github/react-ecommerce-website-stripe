import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from 'react-hot-toast';

const Context = createContext(); 

export const StateContext = ({ children }) => { 
    const [showCart, setShowCart] = useState(false); 

    const [cartItems, setCartItems] = useState(); 
    const [total, settotal] = useState(); 

    const [totalPrice, setTotalPrice] = useState(); 

    const [totalQuantities, setTotalQuantities] = useState(); 
    const [qty, setQty] = useState(1); 

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
        <Context.Provider 
        vlaue={{ 
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