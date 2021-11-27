import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail';


function ItemDetailContainer() {

    const [post, setPost] = useState([])
    
    
        
    
    useEffect(() => {

       
            
                
           

            fetch('https://fakestoreapi.com/products?limit=1')
            .then((response) => response.json())
            .then((data) =>{ 
            
                console.log('Esto viene de api' ,data)

                setPost(data)
        
             })

                 .catch(err => console.log(err));


        
    
        
        
      
    }, [])


    console.log(post);

    return (
        <div>
            <ItemDetail post= {post[0]}  />
        </div>
    )
}

export default ItemDetailContainer
