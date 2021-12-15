import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { getPost } from '../../Services/getItem';


function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    
    //Con esto obtengo el id del producto para el detalle
    const { id } = useParams();
      
    
    useEffect(() => {

        
        getPost(id)
        
        .then(data => setProducts(data))
    
        
        
      
    }, [id])


    return (
        <div>
            <ItemDetail products = {products}  />
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