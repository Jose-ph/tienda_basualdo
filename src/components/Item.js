import React from 'react'

function Item({post}) {
    return (
        <div>
            
        <h2> {post.id} </h2>

        <p>  {post.title}  </p>
        </div>
    )
}

export default Item
