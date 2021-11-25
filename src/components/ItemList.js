import React from 'react'
import Item from './Item'

function ItemList({post}) {

   console.log({post})
  




    return (
        <div className= 'd-flex flex-row'>
            {post.map(postElement => {

                return  <Item post = {postElement}    />
            } )}

           
        </div>
    )
}

export default ItemList
