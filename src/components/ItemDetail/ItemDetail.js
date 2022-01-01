import React, { useState,useContext } from 'react'
import ItemCount from '../../containers/ItemCount/ItemCount';
 import { useHistory } from 'react-router' 
import { CartContext } from '../../Context/CartContext';




function ItemDetail({products}) {

    
    
    /* console.log('Esto viene de ItemDetailContainer', {...products}); */

    const  {cart,addItem} = useContext(CartContext)

    const {isInCart} = useContext(CartContext)

    const [buy, setBuy] = useState(false)

   //const [product, setProduct] = useState({})

   const [qty, setqty] = useState(1)

    let stock = 20;

    const initial = 0;

     let history = useHistory(); 


    /* const handleAddCart = () =>{

        setBuy(true)

        setProduct({...products, 'quantity': qty})
        

    } */

    const handleAddCart = () =>{

        if(isInCart(products.id)){
            setBuy(true)

            alert('Producto existente')
        }
        else{
            if(qty > 0){
                setBuy(true)
                console.log(buy)
                const newProduct = {...products, quantity:qty}
                addItem(newProduct)
               
            }
        }
    }

   const goBack = () =>{

        history.push('/')
    } 
    const goCart = () =>{

      history.push('/cart')
  } 
    
  /*   const handleCart = () =>{ //Esta función ahora es para comprar y no navegar
        history.push('/cart')
    }
 */

      
   /*  const handlePurchase = () =>{ //Esta función ahora es para comprar y no navegar
        
        const duplicate = isInCart(products.id)

       if(!duplicate){

            addItem({product});

       }

      else {
            alert("Producto existente en el carrito")
       }

      
       
    }
  */

    const handlePurchase = () => {

        console.log(qty )
        console.log("aca se compra")

       let prueba = cart.reduce ((counter,product)=> counter + product.price * product.quantity, 0);
       console.log(prueba)
    }
  
    

    return (
        <div>
        
        <div className="d-flex justify-content-center" id='prueba-dos' >

        <div className ="card " style={{'width': '50rem', 'backgroundColor':' #20b9ee '}} >

        <div className="card-body d-flex flex-column justify-content-around" >
        <img className="align-self-center" src={products.image} alt="logo prueba"  style={ {'width': '100px'}}                  /> 
        <h5 className="card-title align-self-center" > {products.title} </h5>
        <p className="card-text align-self-center" > Precio :$ {products.price} </p>
        <p className="card-text align-self-center" > Descripción: {products.description} </p>

       
       {/*  <ItemCount stock= {stock} initial = {initial} onAdd = {handleChange}  />

        <button onClick={goBack} className="btn btn-success mt-2" >Volver</button>
            
        <button onClick={goBack} className="btn btn-success mt-2" >Comprar</button>   
        <ItemCount stock= {stock} initial = {initial} onAdd = {handleChange}> </ItemCount>  */}  

        {  !buy ? (
           
         <>
           <ItemCount  quantity={qty} modifyQuantity={setqty} stock= {stock} initial = {initial} onAdd = {handleAddCart} > </ItemCount>
           <button onClick={goBack} className="btn btn-success mt-2" >Volver</button>
           </>
        )
        
          :
            (
                <>
            {/* <button onClick={handlePurchase} className="btn btn-success mt-2" > Comprar </button>  */}
            <button onClick={goBack} className="btn btn-success mt-2" >Volver</button>
            <button onClick={goCart} className="btn btn-success mt-2" >Terminar compra</button>

          </> 
            )
        }
        
        </div>

        </div>


        </div>
                
        </div>
    )
}

export default ItemDetail
