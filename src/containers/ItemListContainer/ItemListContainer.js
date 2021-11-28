
import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'



function ItemListContainer({greeting}) {

    const [post, setPost] = useState([])

    useEffect(() => {

       
        

            fetch('https://fakestoreapi.com/products?limit=5')
            .then((response) => response.json())
            .then((data) =>{ 
            
                

                setPost(data)
        
        });
        
        
        
        
      
    }, [])

 

    return (
        <div>

            <h2 style={{"margin": "20px", "padding": "5px"}}    >   {greeting}   </h2>

            <ItemList  post = {post}  />
            
        </div>
    )
}

export default ItemListContainer
