//En este componente vamos a poner el display y los botones
import React from 'react'
import Buttons from '../components/Buttons'
import CountDisplay from '../CountDisplay'

function Itemcount() {

  //Definir la lógica
    return (

        <div>  

            <CountDisplay/>
             <Buttons/>



        </div>
    )
}

export default Itemcount
