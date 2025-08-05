import React from 'react'
import { FotoYnombreComp } from './FotoYnombreComp'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

export const Cuerpo5 = () => {
  const {dataUser} = useContext(UserContext)
  return (
    <div className='cuerpo5Content'>

      <div>
        <FotoYnombreComp dataUser={dataUser}/>
      </div>

      <div className='cuerpo5ListAndStarsContent'>

      </div>
        
    </div>
  )
}
