
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import ItemList from '../../components/ItemList/ItemList'
import { getPosts, getPostsByCategory,} from '../../Services/getItem'





function ItemListContainer({greeting}) {

    const [post, setPost] = useState([]);
    const {categoryId} = useParams()
   

    useEffect(() => {

        if(categoryId === undefined){
            getPosts()
            .then(data => setPost(data))
            
        }
        else {
             //getPosts()
           getPostsByCategory(categoryId)
           .then((data) => setPost(data))

        }
           
        
        
        
      
    }, [categoryId])

    console.log("Este post viene de la función",post)

    return (
        <div>

          
            <h2 style={{"margin": "20px", "padding": "5px"}}    >   {greeting}   </h2>

            <ItemList  post = {post}  />
                                    
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

 