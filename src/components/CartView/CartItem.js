



import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../Context/CartContext'


function CartItem({product}) {

    const {removeItem} = useContext(CartContext)
    console.log(product)
    console.log('ID desde cartitem',product.product.id)
    console.log('TITLE desde cartitem',product.title)

    return (
        <div>

            <h4> {product.product.title} </h4>
            <img alt='electronic product' src= {product.product.image} style = {{width:'150px', height:'150px'}} ></img>
            <p>{product.product.price} </p>
            <p> {product.product.quantity}  </p>

            <button className='btn btn-danger'onClick={()=>{removeItem(product.id)}} >BORRAR</button>
            
        </div>
    )
}

export default CartItem
