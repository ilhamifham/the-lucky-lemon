import { useState, useEffect } from "react";
import { cartContext } from "/src/contexts/useCartContext.js";

function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);
    const cartItemsCount = cartItems.reduce((total, currentCartItem) => total + currentCartItem.quantity, 0);

    function addToCart(item) {
        setCartItems((prevCartItems) => {
            const existingCartItem = prevCartItems.find(prevCartItem => prevCartItem.title === item.title);

            if (existingCartItem) {
                return prevCartItems.map(prevCartItem => prevCartItem.title === item.title ? { ...prevCartItem, quantity: prevCartItem.quantity + 1 } : prevCartItem);
            } else {
                return [...prevCartItems, { ...item, quantity: 1 }]
            }
        });
    }

    function removeFromCart(item) {
        setCartItems((prevCartItems) => {
            const existingCartItem = prevCartItems.find(prevCartItem => prevCartItem.title === item.title);

            if (existingCartItem) {
                return prevCartItems
                    .map(prevCartItem => prevCartItem.title === item.title ? { ...prevCartItem, quantity: prevCartItem.quantity - 1 } : prevCartItem)
                    .filter(prevCartItem => prevCartItem.quantity > 0);
            }
        });
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <cartContext.Provider value={{ cartItems, setCartItems, cartItemsCount, addToCart, removeFromCart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
