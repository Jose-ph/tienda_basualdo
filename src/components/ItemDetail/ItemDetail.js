import React from 'react'
import ItemCount from '../containers/ItemCount';




function ItemDetail({post}) {
    console.log('Esto viene de ItemDetailContainer', {post});

    let stock = 3;
    const initial = 0;
    return (
        <div>
        
        <div>

        <div className ="card" style={{'width': '18rem', 'backgroundColor':' #20b9ee '}} >

        <div className="card-body" >
        <img src={post.image} alt="logo prueba"  style={ {'width': '100px'}}                  /> 
        <h5 className="card-title" > {post.title} </h5>
        <p className="card-text" > {post.price} </p>
        <p className="card-text" > {post.description} </p>

        <ItemCount stock= {stock} initial = {initial} />
        <a href="/#" className="btn btn-success mt-2" >Volver</a>
       

</div>

</div>


</div>
                
        </div>
    )
}

export default ItemDetail
