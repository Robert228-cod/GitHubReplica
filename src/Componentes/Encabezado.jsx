import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { NavBar } from './NavBar'
import { CiMenuBurger } from "react-icons/ci";
import { LiaFrogSolid } from "react-icons/lia";
import { FaRegDotCircle } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { BiCollection } from "react-icons/bi";

export const Encabezado = () => {

    const {dataUser} = useContext(UserContext)

  return (
    <div className='contenidoDelHeader'>
        <div className='headerFirstRow'>
          <div className='nameAvatar'>
            <button className='buttonMenu'> <CiMenuBurger /> </button>
            <img className='avatar' src={"/imagenes/github.png"} alt="foto" />
            <span className='userName'><h2>{dataUser?.login}</h2></span>
          </div>
          <div className='inputAndButtonsheader'>
            <input className='inputheader' type="text" placeholder='Type / to search'/>
            <div className='buttonSelectHeader'>
              <button className='headerButtonsB'><LiaFrogSolid className='headerFrogIcon'/></button>
              <select className='headerButtonsS'>O</select>
            </div>
            <select style={{fontSize: "20px", width: "45px"}} className='headerButtons'><option>+</option></select>
            <button className='headerButtons'><FaRegDotCircle /></button>
            <button className='headerButtons'><SiGithubactions /></button>
            <button className='headerButtons'><BiCollection /></button>
            <img className='avatar' src={dataUser?.avatar_url} alt="image" />
          </div>
        </div>
        
        <div className='barraNavegacion'> <NavBar/> </div>
        
    </div>
  )
}
