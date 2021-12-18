import React, { useContext,useState } from 'react'
import {CartContext} from "../../Context/CartContext"

function CheckOut() {

    const {cart, totalPurchase} = useContext(CartContext)

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


    }

    

 
    const handleValues = (e)=> {

      
        console.log(e.target.name)

        setValues({

            ...values,
            [e.target.name]: e.target.value

        })

       
    }










    return (
        <div>
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




          





        </div>
    )
}

export default CheckOut
