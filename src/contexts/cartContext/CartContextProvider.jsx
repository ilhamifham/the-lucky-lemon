import { useState, useEffect, useMemo, useCallback } from "react";
import { CartContext } from "./useCartContext.js";

<<<<<<< HEAD:src/components/provider/CartContextProvider.jsx
function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartItemsCount = useMemo(
    () =>
      cartItems.reduce(
        (total, currentCartItem) => total + currentCartItem.quantity,
        0
      ),
    [cartItems]
  );
  const cartItemsPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, currentCartItem) =>
          total + currentCartItem.price * currentCartItem.quantity,
        0
      ),
    [cartItems]
  );

  function addToCart(item) {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (prevCartItem) => prevCartItem.title === item.title
      );

      if (existingCartItem) {
        return prevCartItems.map((prevCartItem) =>
          prevCartItem.title === item.title
            ? { ...prevCartItem, quantity: prevCartItem.quantity + 1 }
            : prevCartItem
        );
      }

      return [...prevCartItems, { ...item, quantity: 1 }];
    });
  }

  function removeFromCart(item) {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (prevCartItem) => prevCartItem.title === item.title
      );

      if (existingCartItem) {
        return prevCartItems
          .map((prevCartItem) =>
            prevCartItem.title === item.title
              ? { ...prevCartItem, quantity: prevCartItem.quantity - 1 }
              : prevCartItem
          )
          .filter((prevCartItem) => prevCartItem.quantity > 0);
      }

      return prevCartItems;
    });
  }

  function changeQuantity(item, quantity) {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (prevCartItem) => prevCartItem.title === item.title
      );

      if (existingCartItem) {
        return prevCartItems.map((prevCartItem) =>
          prevCartItem.title === item.title
            ? { ...prevCzartItem, quantity: parseInt(quantity) }
            : prevCartItem
        );
      }

      return prevCartItems;
    });
  }

  function deleteCartItem(item) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter(
        (prevCartItem) => prevCartItem.title !== item.title
      );
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
=======
export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((item) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((prevCartItem) => prevCartItem.id === item.id);
>>>>>>> 2c393ceb1b9c6fb4f94902be6e4fb065451ec137:src/contexts/cartContext/CartContextProvider.jsx

      if (existingCartItem) {
        return prevCartItems.map((prevCartItem) => (prevCartItem.id === item.id ? { ...prevCartItem, quantity: prevCartItem.quantity + 1 } : prevCartItem));
      }

      return [...prevCartItems, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((item) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((prevCartItem) => prevCartItem.id === item.id);

      if (existingCartItem) {
        return prevCartItems
          .map((prevCartItem) => (prevCartItem.id === item.id ? { ...prevCartItem, quantity: prevCartItem.quantity - 1 } : prevCartItem))
          .filter((prevCartItem) => prevCartItem.quantity > 0);
      }

      return prevCartItems;
    });
  }, []);

  const changeQuantity = useCallback((item, quantity) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((prevCartItem) => prevCartItem.id === item.id);

      if (existingCartItem) {
        return prevCartItems.map((prevCartItem) => (prevCartItem.id === item.id ? { ...prevCartItem, quantity: parseInt(quantity) } : prevCartItem));
      }

      return prevCartItems;
    });
  }, []);

  const deleteCartItem = useCallback((item) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((prevCartItem) => prevCartItem.id !== item.id);
    });
  }, []);

  const cartItemsCount = useMemo(() => cartItems.reduce((total, currentCartItem) => total + currentCartItem.quantity, 0), [cartItems]);
  const cartItemsPrice = useMemo(() => cartItems.reduce((total, currentCartItem) => total + currentCartItem.price * currentCartItem.quantity, 0), [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
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
