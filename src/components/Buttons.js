import React from 'react'

function Buttons({add,subtract}) {
    return (
        <div>
            <button onClick = {add}  className ="btn btn-primary mx-2" >+</button>
            <button onClick={subtract} className ="btn btn-warning mx-2" >-</button>
            <button className ="btn btn-success" >Agregar al Carrito</button>
        </div>
    )
}

export default Buttons
