import React from 'react'
import Item from './Item'

function ItemList({post}) {

  

    return (
        <div className= 'd-flex flex-row'>

            {post.map(postElement => {

                return  <Item post = {postElement}    />
            } )}

           
        </div>
    )
}

export default ItemList
