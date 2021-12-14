import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../Context/CartContext'
import CartItem from './CartItem'

function CartView() {

    const {cart,clearCart} = useContext(CartContext)

   /*  if ( cart.length === 0){

        return (
            
                <div>

            <h3>No hay productos en el carrito</h3>
            
            <Link to={"/"} >Volver</Link>


             </div>
        )
    } 

        
    return (
        <div>

            <h3> Cart view</h3>

            <div>
            { cart.map((product) => <CartItem {...product}    />   )   }

            </div>
            
        </div>
    ) */
        console.log('Esto viene del cartview',cart)
        return (

            cart.length === 0 ? <h1>Vacio</h1> : <h1>Coon producto</h1> 

        )
     

}

export default CartView
