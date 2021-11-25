import React from 'react'

function Item({post}) {
    return (
        <div>

        <div className ="card" style={{'width': '18rem', 'background-color':' #20b9ee '}} >

        <div className="card-body" >
        <img src={post.image} alt="logo prueba"  style={ {'width': '100px'}}                  /> 
        <h5 className="card-title" > {post.title} </h5>
        <p className="card-text" > {post.description} </p>
        <a href="/#" className="btn btn-success" >See details</a>

        </div>

        </div>

        
        </div>
    )
}

export default Item
