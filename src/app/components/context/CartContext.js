"use client"
    import React, { createContext, useContext, useState } from 'react';

    const CartContext = createContext();


    const CartProvider = ({ children }) => {
        const [count, setCount] = useState(0);
        const [cartItem, setCartItem] = useState([]);
        console.log('cartItem', cartItem)
        
        const addItemToCart = () => {
            const existingItemIndex = cartItem.findIndex((cartItem) => cartItem.id === item.id);

            if (existingItemIndex !== -1) {
                const updatedCart = [...cartItem];
                updatedCart[existingItemIndex].quantity += 1;
                setCartItem(updatedCart);
            } else {
                setCartItem([...cartItem, { ...item, quantity: 1 }]);
            }
        }
        const removeItemFromCart = (id) => {
            const updatedCart = cartItem.filter((item) => item.id !== id);
            setCartItem(updatedCart);
        }


        return (
            <CartContext.Provider value={{ count, setCount, cartItem, setCartItem , addItemToCart, removeItemFromCart }}>
                {children}
            </CartContext.Provider>
        );

    };

    export { CartProvider, CartContext };