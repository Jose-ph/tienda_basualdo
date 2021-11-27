import React from 'react'

function ItemDetail({post}) {
    return (
        <div>
                <h1> {post.title} </h1>
                <p> {post.description} </p>
                <p> {post.price} </p>
        </div>
    )
}

export default ItemDetail
