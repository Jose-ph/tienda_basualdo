
import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'



function ItemListContainer({greeting}) {

    const [post, setPost] = useState([])

    useEffect(() => {

       
        

            fetch('https://fakestoreapi.com/products?limit=5')
            .then((response) => response.json())
            .then((data) =>{ 
            
                console.log('Esto viene de api' ,data)

                setPost(data)
        
        });
        
        
        
        
      
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
