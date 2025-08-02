import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Cuerpo2 } from './Cuerpo2'

export const Encabezado = () => {

    const {dataUser} = useContext(UserContext)

  return (
    <div className='contenidoDelHeader'>
        <div className='nameAvatar'>
          <button className='buttonMenu'> = </button>
          <img className='avatar' src={"/imagenes/github.png"} alt="foto" />
          <span className='userName'><h2>{dataUser?.login}</h2></span>
        </div>
        
        <div className='barraNavegacion'> <NavBar/> </div>
        
    </div>
  )
}
