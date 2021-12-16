
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ItemList from '../../components/ItemList/ItemList'
import Loader from '../../components/Loader/Loader';

import { getPosts, getPostsByCategory,} from '../../Services/getItem'

import {collection, getDocs, query, where} from "firebase/firestore/lite"
import {dataBase} from "../../firebase/config"





function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()
   

    useEffect(() => {

        //Estos datos vienen de la API
       /*  if(categoryId === undefined){
            getPosts()
            .then(data => setProducts(data))
            
        }
        else {
             //getPosts()
           getPostsByCategory(categoryId)
           .then((data) => setProducts(data))

        }
            */


        //Esto viene de firebase


        //1 armado de referencia

        const productRef = collection(dataBase,"products");

        const queryFilter = categoryId ? query(productRef, where("category","==", categoryId)) :productRef

        //2 Petición a la referencia

        getDocs(queryFilter)
            .then((response) =>{

                const items = response.docs.map((doc) => ({id:doc.id, ...doc.data()}) )
                console.log(items)
                setProducts(items)
            })

            .finally(()=>{

                //Aca usar loading
            })
        
      
    }, [categoryId])

    console.log("Este post viene de la función",products)

    return (
        <div>

            
          {/* 
            <h2 style={{"margin": "20px", "padding": "5px"}}    >   {greeting}   </h2>

            <ItemList  post = {post}  />
                                     */}

             {products.length !==0 ?
             

             <ItemList  products = {products}  />
            :
             
            <Loader/>  }
        </div>
    )
}

export default ItemListContainer 


//Esta era la lógica anterior

/* 
function ItemListContainer({greeting}) {

    const [post, setPost] = useState([]);
   

    useEffect(() => {

       
        //Esta lógica era la de la entrega anterior 7

            fetch('https://fakestoreapi.com/products?limit=5')
            .then((response) => response.json())
            .then((data) =>{ 
            
                

                setPost(data)
        
        });
         

            getPosts()
            .then((data) => setPost(data))
        
        
        
      
    }, [])

    console.log("Este post viene de la función",post)

    return (
        <div>

            <h2 style={{"margin": "20px", "padding": "5px"}}    >   {greeting}   </h2>

            <ItemList  post = {post}  />
            
        </div>
    )
}

export default ItemListContainer */

 