import { useState } from 'react'
import React from 'react'


function ItemCount({stock,initial,onAdd, quantity,modifyQuantity,onAddCart}) {

    
     
    
    const [counter, setcounter] = useState(Number(initial)) //esto era string

    
    function add (){

       if( quantity < stock && quantity>=1){

        modifyQuantity  (quantity+1)

        
         //   setcounter(counter + 1);
        //} 

        //setcounter(counter+1)// esto era para sumar sin tener en cuenta el stock

            }
        }

    function subtract (){

        if(quantity >1){

            modifyQuantity(quantity -1)
        }


       /*  if(counter > 0){

           setcounter(counter -1) 
        }     */      
    }

   

    return (
        <div>
          {/*   <h3 > {counter} </h3> */}

          <h3 > {quantity} </h3>

            <button onClick = {add} disabled={quantity === stock} className ="btn btn-primary mx-2" >+</button>
            <button onClick={subtract} disabled={quantity === 1} className ="btn btn-warning mx-2" >-</button>

          

             <button onClick= {(quantity) => onAdd(quantity)}  className ="btn btn-success" >Agregar al Carrito</button>
           
        </div>
    )
}

export default ItemCount
