import { collection, addDoc } from 'firebase/firestore/lite'
import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {CartContext} from "../../Context/CartContext"
import { dataBase } from '../../firebase/config'
import Loader from '../Loader/Loader'


function CheckOut() {

    const {cart, totalPurchase, clearCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [loading,setLoading] = useState(false)

    const [values, setValues] = useState({

        nombre: "",
        email: "",
        cel: "",

    })


    const handleSubmit = (e) =>{

        e.preventDefault();

        const order = {

            buyer: values, 
            items: cart,
            total: totalPurchase(),
            
        }
    


        

        console.log(order)

        const ordersRef = collection(dataBase, "orders")

        setLoading(true)
        addDoc(ordersRef, order)

        .then((resp) =>{

            console.log(resp.id)
            setOrderId(resp.id)
            clearCart()

        })
        .finally(()=>{
            setLoading(false)
        })




    }

    

 
    const handleValues = (e)=> {

      
        console.log(e.target.name)

        setValues({

            ...values,
            [e.target.name]: e.target.value

        })

       
    }





    if(loading){

        return <Loader></Loader>
    }




    return (
        <div>
            {
            orderId ? <>
            <h2>Compra registrada con éxito !</h2>
            <hr></hr>
            <p>Tu número de orden es: {orderId} </p>
            <Link to ="/" className ="btn btn-warning" > Ir al inicio</Link>
            </>

            :

            <>
            
            <h2> Vista de Check--out</h2>

<hr/>

<form onSubmit={handleSubmit} > 

<input   
    name='nombre'
    onChange={handleValues}
    value= {values.nombre}
    className='form-control container w-50'
    type="text"
    placeholder='Ingresa tu nombre'


/>
  <input   
    name='email'
    onChange={handleValues}
    value= {values.email}
    className='form-control container w-50'
    type="email"
    placeholder='ejemplo@gmail.com'


/>

<input   

    name='cel'
    onChange={handleValues}
    value= {values.cel}
    className='form-control container w-50'
    type="tel"
    placeholder='Teléfono'


/>







<button type='submit' className="btn btn-warning" > Enviar</button>

</form>
            
            </>

          }


          




          





        </div>
    )
}

export default CheckOut
