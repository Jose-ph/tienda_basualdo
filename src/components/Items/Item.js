import React, { useEffect } from 'react'
import { useHistory } from 'react-router'


function Item({post,key}) {
    let history = useHistory();
    const seeDetails = () =>{
        history.push(`/item/${post.id}`)
    }

    return (
        <div>

        <div  className ="card" style={{'width': '18rem', 'backgroundColor':' #20b9ee '}} >

        <div className="card-body" >
        <img src={post.image} alt="logo prueba"  style={ {'width': '100px'}}                  /> 
        <h5 className="card-title" > {post.title} </h5>
        <p className="card-text" > {post.description} </p>
        <button onClick = {seeDetails} className="btn btn-success" >See details</button>

        
        </div>

        </div>

        
        </div>
    )
}

export default Item
