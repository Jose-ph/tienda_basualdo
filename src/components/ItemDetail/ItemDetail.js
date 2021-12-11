import React, { useState,useContext } from 'react'
import ItemCount from '../../containers/ItemCount/ItemCount';
 import { useHistory } from 'react-router' 
import { CartContext } from '../../Context/CartContext';




function ItemDetail({post}) {
    
    console.log('Esto viene de ItemDetailContainer', {post});

    const  {addItem} = useContext(CartContext)
    const {isInCart} = useContext(CartContext)

    const [buy, setBuy] = useState(false)

    let stock = 3;

    const initial = 0;

     let history = useHistory(); 

    const handleChange = (numberofItems) =>{
        setBuy(true)
    }
   const goBack = () =>{

        history.push('/')
    } 
    
  /*   const handleCart = () =>{ //Esta función ahora es para comprar y no navegar
        history.push('/cart')
    }
 */

      
    const handleCart = () =>{ //Esta función ahora es para comprar y no navegar
        
        const duplicate = isInCart(post.id)

        if(!duplicate){

            addItem(post);


        }

        else {
            alert("Producto existente en el carrito")
        }

      
       
    }
 

    

    return (
        <div>
        
        <div className="d-flex justify-content-center"  >

        <div className ="card " style={{'width': '50rem', 'backgroundColor':' #20b9ee '}} >

        <div className="card-body d-flex flex-column justify-content-around" >
        <img className="align-self-center" src={post.image} alt="logo prueba"  style={ {'width': '100px'}}                  /> 
        <h5 className="card-title align-self-center" > {post.title} </h5>
        <p className="card-text align-self-center" > {post.price} </p>
        <p className="card-text align-self-center" > {post.description} </p>

       
       {/*  <ItemCount stock= {stock} initial = {initial} onAdd = {handleChange}  />

        <button onClick={goBack} className="btn btn-success mt-2" >Volver</button>
            
        <button onClick={goBack} className="btn btn-success mt-2" >Comprar</button>    */}  

        {!buy?

            //Esto lo puse como children porque quiero mostrar ese botón y no sé como se hace sino.
        <ItemCount stock= {stock} initial = {initial} onAdd = {handleChange}> </ItemCount>
        
        
        
          :
        
        <button onClick={handleCart} className="btn btn-success mt-2" >Comprar </button>                 
        }
        
        </div>

        </div>


        </div>
                
        </div>
    )
}

export default ItemDetail
