import { useState } from 'react'
import React from 'react'
import Buttons from '../components/Buttons'
import CounterDisplay from '../components/CounterDisplay'

function ItemCount({stock,initial,onAdd}) {

    console.log({stock})
    console.log({initial})
    
    const [counter, setcounter] = useState(Number(initial)) //esto era string

    function add (){

        if( counter < stock){

            setcounter(counter + 1);
        }

    }

    function subtract (){

        if(counter > 0){

        setcounter(counter -1) 
        }          
}

    return (
        <div>
            <CounterDisplay counter= {counter} />
            <Buttons add = {add}  subtract = {subtract}   />
        </div>
    )
}

export default ItemCount
