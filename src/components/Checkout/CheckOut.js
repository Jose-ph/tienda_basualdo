import { collection, addDoc, Timestamp, doc, updateDoc, getDoc, writeBatch, getDocs, query, where, documentId} from 'firebase/firestore/lite'
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
            date: Timestamp.fromDate(new Date() )
            
        }
    


        

        console.log(order)

        const batch = writeBatch(dataBase)

        const ordersRef = collection(dataBase, "orders")

        //actualizar documento en base de datos

        const productsRef = collection(dataBase, "products")

        const q = query(productsRef, where(documentId(), 'in', cart.map(el => el.id)))


        //Esto es una serie de cambios en conjunto en vez de a uno.

        const oufOfStock =[]
        getDocs(q)
        .then((resp) =>{

            resp.docs.forEach(doc => {

                const item = cart.find((prod)=> prod.id === doc.id)
                if(doc.data().stock>= item.quantity){
                    batch.update(doc.ref, {
                        stock: doc.data().stock - item.quantity
                    })
                   
                }
                else { oufOfStock.push(item)}
                
            });

            if(oufOfStock.length === 0){

                setLoading(true)
        addDoc(ordersRef, order)

        .then((resp) =>{

            console.log(resp.id)
            batch.commit()
            setOrderId(resp.id)
            clearCart()

        })
        .finally(()=>{
            setLoading(false)
        })

               

            }
            else {alert("Productos sin stock en el carrito!!")}
            //indicar cual falta y dirigir al carrito.
            //mostrar mensaje de error
           
        })
        
        
       /* setLoading(true)
        addDoc(ordersRef, order)

        .then((resp) =>{

            console.log(resp.id)
            setOrderId(resp.id)
            clearCart()

        })
        .finally(()=>{
            setLoading(false)
        })
 */


    



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



    //opción uno para cambiar stock.
     /*    cart.forEach(item => {
            const docRef = doc(productsRef, item.id)

            getDoc(docRef)
            .then(doc =>{

                if(doc.data().stock >= item.quantity){

                    updateDoc(docRef,{
                        stock: doc.data().stock - item.quantity
                    })

                }

                else{ alert("Out of STOCK")}
               
            })
            
        }); */
 