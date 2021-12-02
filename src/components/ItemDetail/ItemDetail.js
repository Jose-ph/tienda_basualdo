import React from 'react'
import ItemCount from '../../containers/ItemCount/ItemCount';
import { useHistory } from 'react-router'




function ItemDetail({post}) {
    console.log('Esto viene de ItemDetailContainer', {post});

    let stock = 3;
    const initial = 0;

    let history = useHistory();
    const goBack = () =>{

        history.push('/')
    }
    return (
        <div   >
        
        <div className="d-flex justify-content-center"  >

        <div className ="card " style={{'width': '50rem', 'backgroundColor':' #20b9ee '}} >

        <div className="card-body d-flex flex-column justify-content-around" >
        <img className="align-self-center" src={post.image} alt="logo prueba"  style={ {'width': '100px'}}                  /> 
        <h5 className="card-title align-self-center" > {post.title} </h5>
        <p className="card-text align-self-center" > {post.price} </p>
        <p className="card-text align-self-center" > {post.description} </p>

        <ItemCount stock= {stock} initial = {initial} />
        <button onClick={goBack} className="btn btn-success mt-2" >Volver</button>
       

        </div>

        </div>


        </div>
                
        </div>
    )
}

export default ItemDetail
