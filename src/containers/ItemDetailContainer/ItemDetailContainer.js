import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { getPost } from '../../Services/getItem';

import {dataBase} from "../../firebase/config";
import {doc, getDoc} from "firebase/firestore/lite"
import Loader from '../../components/Loader/Loader';




function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    
    //Con esto obtengo el id del producto para el detalle
    const { id } = useParams();
      
    
    useEffect(() => {

        //Estos datos venian de la API
       /*  getPost(id)
        
        .then(data => setProducts(data))
     */
        //Lo que sigue viene de firebase

        //1 referencia al documento de firebase

        const documentRef = doc(dataBase,"products", id)

        // 2 Peticion a la referencia

        getDoc(documentRef)
        .then((doc) => {
        
            const item = {

                id: doc.id, ...doc.data()

            }
            
            console.log(item)
            setProducts(item)
        })


        .finally(()=>{

            //usar loader
        })
    }, [id])


    return (
        <div>


            {products.length === 0 ? <Loader/> : <ItemDetail products = {products}  /> }




           
        </div>
    )
}

export default ItemDetailContainer

//Lógica anterior
/* 
function ItemDetailContainer() {

    const [post, setPost] = useState([])
    
    
        
    
    useEffect(() => {

           
            fetch('https://fakestoreapi.com/products/2')
            .then((response) => response.json())
            .then((data) =>{ 
            
                console.log('Esto viene de api' ,data)

                setPost(data)
        
             })

                 .catch(err => console.log(err));
 

         getPost(2) 
        
        .then(data => setPost(data))
    
        
        
      
    }, [])


    console.log('Esto es lo que está en el estado Post',post);

    return (
        <div>
            <ItemDetail post= {post}  />
        </div>
    )
}

export default ItemDetailContainer
 */