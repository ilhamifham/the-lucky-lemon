import { createContext, useContext } from "react";

export const CartContext = createContext(undefined);

export function useCartContext() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
}
