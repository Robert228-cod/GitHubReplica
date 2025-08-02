import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { FotoYnombreComp } from './FotoYnombreComp'

export const Cuerpo3 = () => {
  const {dataUser} = useContext(UserContext)
  return (
    <div className='cuerpo3HighDiv'>
        <div>
          <FotoYnombreComp dataUser={dataUser}/>
        </div>

        <div className='cuerpoNewProjectDiv'>
          <div>Icono</div>
          <h2 className='cuerpo3TitleText'>Create your first GitHub project</h2>
          <p>Projects are a customizable, flexible tool for planning and tracking your work.</p>
          <div>
            <button className='cuerpo3NewProjectButton'><span>New project</span></button>
          </div>
        </div>
    </div>
  )
}
