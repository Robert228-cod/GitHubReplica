import React, { useContext } from 'react'
import { FotoYnombreComp } from './FotoYnombreComp'
import { UserContext } from '../Context/UserContext'
import { RegistryGrid } from './RegistryGrid'
import { FcOrgUnit } from "react-icons/fc";

export const Cuerpo4 = () => {

  const {dataUser} = useContext(UserContext)

  return (
    <div className='cuerpo4Content'>
        <div>
          <FotoYnombreComp dataUser={dataUser}/>
        </div>

        <div className='cuerpo4StartedRegistry'>
          <span><FcOrgUnit style={{fontSize: "60px"}}/></span>
          <div className='cuerpo4Started'>
            <h1 className='cuerpo4StartedTitle'>Get started with GitHub Packages</h1>
            <p className='cuerpo4StartedP'>Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>
          </div>

          <div>
            <span>Choose a registry</span>
            <RegistryGrid/>
          </div>
        </div>
    </div>
  )
}
