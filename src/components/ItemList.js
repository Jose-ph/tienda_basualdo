import React from 'react'
import Item from './Item'

function ItemList({post}) {

   console.log({post})
  




    return (
        <div>
            {post.map(postElement => {

                return  <Item post = {postElement}    />
            } )}

           
        </div>
    )
}

export default ItemList
