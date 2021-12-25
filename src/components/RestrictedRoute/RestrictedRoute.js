
import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../Context/UserContext'

function RestrictedRoute({children}) {

    let history = useHistory()
    const goHome = () =>{

        history.push("/")
    }

    const {logged} = useContext(UserContext);
    return logged ? children: goHome
}

export default RestrictedRoute
