import React, { useContext } from 'react'
import AuthenContext from '../../context/AuthenContext/AuthenContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({component:Component}) => {

    const {auth} = useContext(AuthenContext)
    const {isAuthenticated} = auth

    if(isAuthenticated) {
        return <Component/>
    }
    return <Navigate to="/login"/>
  
}

export default PrivateRoute