import { useState } from 'react'
import React from 'react'


function ItemCount({stock,initial,onAdd}) {

  
     
    
    const [counter, setcounter] = useState(Number(initial)) //esto era string

    function add (){

       // if( counter < stock){

         //   setcounter(counter + 1);
        //} 

        setcounter(counter+1)// esto era para sumar sin tener en cuenta el stock

    }

    function subtract (){

        if(counter > 0){

        setcounter(counter -1) 
        }          
}

    return (
        <div>
            <h3 > {counter} </h3>
            <button onClick = {add}  className ="btn btn-primary mx-2" >+</button>
            <button onClick={subtract} className ="btn btn-warning mx-2" >-</button>
            <button onClick= {onAdd} className ="btn btn-success" >Agregar al Carrito</button>
           
        </div>
    )
}

export default ItemCount
