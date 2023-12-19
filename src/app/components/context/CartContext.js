"use client"
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [cartItem, setCartItem] = useState([]);


    return (
        <CartContext.Provider value={{ count, setCount, cartItem, setCartItem }}>
            {children}
        </CartContext.Provider>
    );

};

export { CartProvider, CartContext };