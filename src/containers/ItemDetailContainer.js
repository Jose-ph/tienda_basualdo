import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail';


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


        
    
        
        
      
    }, [])


    console.log('Esto es lo que está en el estado Post',post);

    return (
        <div>
            <ItemDetail post= {post}  />
        </div>
    )
}

export default ItemDetailContainer
