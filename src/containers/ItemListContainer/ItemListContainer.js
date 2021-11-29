
import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { getPosts } from '../../Services/getItem'



function ItemListContainer({greeting}) {

    const [post, setPost] = useState([])

    useEffect(() => {

       
        //Esta lógica era la de la entrega anterior 7
/* 
            fetch('https://fakestoreapi.com/products?limit=5')
            .then((response) => response.json())
            .then((data) =>{ 
            
                

                setPost(data)
        
        });
         */

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

export default ItemListContainer
