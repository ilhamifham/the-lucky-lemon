import { createContext, useContext } from "react";

export const cartContext = createContext(undefined);

export function useCartContext() {
    const context = useContext(cartContext);

    if (context === undefined) {
        throw new Error("useCartContext must be used within a CartContextProvider");
    }

    return context;
}