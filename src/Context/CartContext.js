
import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        console.log(item)
        setCart([...cart, item]);
    }

    console.log(cart);

    return(
        <CartContext.Provider value = {{
            cart,
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;