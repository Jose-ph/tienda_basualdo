
import React from 'react'
import ItemList from './ItemList'


function ItemListContainer({greeting}) {


    return (
        <div>
            <h2 style={{"margin": "20px", "padding": "5px"}}    >   {greeting}   </h2>

            <ItemList />
            
        </div>
    )
}

export default ItemListContainer
