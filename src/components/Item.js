import React from 'react'
import logoTienda from '../logo3.png'

function Item({post}) {
    return (
        <div>
            
        <h2> {post.id} </h2>

        <p>  {post.title}  </p>

        
        <div className ="card" style={{'width': '18rem'}} >

        <div className="card-body" >
        <img src={logoTienda} alt="logo prueba"                  /> 
        <h5 className="card-title" > Card Title</h5>
        <p className="card-text" > This is where we would display the product</p>
        <a href="/#" className="btn btn-success" >Add to cart</a>

        </div>

        </div>

        
        </div>
    )
}

export default Item
