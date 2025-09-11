import { createContext, useContext, useState, useEffect, useMemo } from "react";

const CartContext = createContext(undefined);

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartItemsCount = useMemo(() => cartItems.reduce((total, currentCartItem) => total + currentCartItem.quantity, 0), [cartItems]);
  const cartItemsPrice = useMemo(() => cartItems.reduce((total, currentCartItem) => total + currentCartItem.price * currentCartItem.quantity, 0), [cartItems]);

  function addToCart(item) {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((prevCartItem) => prevCartItem.title === item.title);

      if (existingCartItem) {
        return prevCartItems.map((prevCartItem) => (prevCartItem.title === item.title ? { ...prevCartItem, quantity: prevCartItem.quantity + 1 } : prevCartItem));
      }

      return [...prevCartItems, { ...item, quantity: 1 }];
    });
  }

  function removeFromCart(item) {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((prevCartItem) => prevCartItem.title === item.title);

      if (existingCartItem) {
        return prevCartItems
          .map((prevCartItem) => (prevCartItem.title === item.title ? { ...prevCartItem, quantity: prevCartItem.quantity - 1 } : prevCartItem))
          .filter((prevCartItem) => prevCartItem.quantity > 0);
      }

      return prevCartItems;
    });
  }

  function changeQuantity(item, quantity) {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((prevCartItem) => prevCartItem.title === item.title);

      if (existingCartItem) {
        return prevCartItems.map((prevCartItem) => (prevCartItem.title === item.title ? { ...prevCartItem, quantity: parseInt(quantity) } : prevCartItem));
      }

      return prevCartItems;
    });
  }

  function deleteCartItem(item) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((prevCartItem) => prevCartItem.title !== item.title);
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartItemsCount,
        cartItemsPrice,
        addToCart,
        removeFromCart,
        changeQuantity,
        deleteCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
}
