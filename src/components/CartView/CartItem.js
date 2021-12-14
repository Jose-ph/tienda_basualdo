



import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../Context/CartContext'


function CartItem({id, title,price, quantity}) {

    const {removeItem} = useContext(CartContext)



    return (
        <div>

            <h1> {title} </h1>
            <p>{price} </p>
            <p> {quantity}  </p>

            <button className='btn btn-danger'onClick={()=>{removeItem(id)}} ></button>
            
        </div>
    )
}

export default CartItem
