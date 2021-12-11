
import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {

        console.log(item)
        
        setCart([...cart, item]);
    }

    const removeItem = (itemId) => {
        
        setCart(cart.filter(post => post.id !== itemId));
    }

    const clearCart = () => {
        
        setCart([]);
    }

    const isInCart = (itemid) => {
        
        return cart.some(post => post.id === itemid)
    }


    

    return(
        <CartContext.Provider value = {{
            cart,
            addItem,
            removeItem,
            isInCart,
            clearCart,

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;