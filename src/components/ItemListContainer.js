
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'



function ItemListContainer({greeting}) {

    const [post, setPost] = useState([])

    useEffect(() => {

        // fetch('https://jsonplaceholder.typicode.com/posts/')
        setTimeout(() => {

            fetch('https://fakestoreapi.com/products?limit=5')
        .then((response) => response.json())
        .then((data) =>{ 
            
                console.log('Esto viene de api' ,data)

                setPost(data)
        
        });
            
        }, 2000);
        
        
        
      
    }, [])

  console.log('Esto está seteado en el Estado',post )

    return (
        <div>

            <h2 style={{"margin": "20px", "padding": "5px"}}    >   {greeting}   </h2>

            <ItemList  post = {post}  />
            
        </div>
    )
}

export default ItemListContainer
