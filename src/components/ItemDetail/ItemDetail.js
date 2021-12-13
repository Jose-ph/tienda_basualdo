import React, { useState,useContext } from 'react'
import ItemCount from '../../containers/ItemCount/ItemCount';
 import { useHistory } from 'react-router' 
import { CartContext } from '../../Context/CartContext';




function ItemDetail({products}) {

    
    
    console.log('Esto viene de ItemDetailContainer', {products});

    const  {addItem} = useContext(CartContext)
    const {isInCart} = useContext(CartContext)

    const [buy, setBuy] = useState(false)

    //const [product, setProduct] = useState({})
   const [qty, setqty] = useState(1)

    let stock = 3;

    const initial = 0;

     let history = useHistory(); 

    const handleAddCart = (numberofItems) =>{

        setBuy(true)
        

    }

   const goBack = () =>{

        history.push('/')
    } 
    
  /*   const handleCart = () =>{ //Esta función ahora es para comprar y no navegar
        history.push('/cart')
    }
 */

      
    const handlePurchase = () =>{ //Esta función ahora es para comprar y no navegar
        
        const duplicate = isInCart(products.id)

       if(!duplicate){

            addItem({products});

         
            


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
        <img className="align-self-center" src={products.image} alt="logo prueba"  style={ {'width': '100px'}}                  /> 
        <h5 className="card-title align-self-center" > {products.title} </h5>
        <p className="card-text align-self-center" > {products.price} </p>
        <p className="card-text align-self-center" > {products.description} </p>

       
       {/*  <ItemCount stock= {stock} initial = {initial} onAdd = {handleChange}  />

        <button onClick={goBack} className="btn btn-success mt-2" >Volver</button>
            
        <button onClick={goBack} className="btn btn-success mt-2" >Comprar</button>   
        <ItemCount stock= {stock} initial = {initial} onAdd = {handleChange}> </ItemCount>  */}  

        {  !buy?
           
          <ItemCount  quantity={qty} modifyQuantity={setqty} stock= {stock} initial = {initial} onAdd = {handleAddCart} > </ItemCount>
          
        
          :
        
          <button onClick={handlePurchase} className="btn btn-success mt-2" >Comprar </button> 
                       
        }
        
        </div>

        </div>


        </div>
                
        </div>
    )
}

export default ItemDetail
