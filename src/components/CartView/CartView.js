import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../Context/CartContext'
import CartItem from './CartItem'

function CartView() {

    const {cart,clearCart,totalPurchase} = useContext(CartContext)

     /* if ( cart.length === 0){

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

        
            /* cart.length === 0 ? <h1>Vacio</h1> : <h1>Con producto</h1>  */

           cart.length === 0 ? (
            
                <div>

            <h3>No hay productos en el carrito</h3>
            
            <Link to={"/"} >Volver</Link>


             </div>
                )

                :

                (  <div>

                    <h3> Cart view</h3>
        
                    <div>
                        {
                     cart.map((product) => <CartItem product ={product}  key={product.id}  />   )   }

                     <h3> Total de la compra: $ {totalPurchase()} </h3>
                    
                     <button className='btn btn-success' onClick={console.log("fin compra")} >Finalizar Compra</button>
                    <button className='btn btn-warning' onClick={()=> {clearCart()}} >VACIAR</button>
                    
                    </div>
                    
                </div>)

        )
      

}

export default CartView
