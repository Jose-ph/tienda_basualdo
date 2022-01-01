import React from 'react'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'

function CartView() {

    const {cart,totalPurchase,clearCart} = useContext(CartContext)
    const {push} = useHistory();



    return (
        <div>

            {cart.length === 0 ?
            
                <>
                <h3>Carrito Vacio</h3>
                <button className='btn btn-info' onClick={()=> push("/")}>Volver</button>
                
                
                </>

                :

                <>

                <div id='carrito'>  

                <h3> Su compra:</h3>

                {
                    cart.map((products) => <CartItem product ={products} key = {products.id} />)

                    
                }

                <h2>Total: $ {totalPurchase()} </h2>

                
                <button className='btn btn-danger mx-3' onClick={()=>{clearCart()}} >Borrar carrito</button>
                <button className='btn btn-success'  onClick={()=> push("/checkout")} >Finalizar compra</button>
                
                </div>
                </>
            
        
        
            }
            
        </div>
    )
}

export default CartView
