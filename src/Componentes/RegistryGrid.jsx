import React from 'react'
import Registrys from '../JSONS/Registrys.json' 

export const RegistryGrid = () => {
  
  return (
    <div className='cuerpo4RegistrysContent'>
      {
        Registrys.map( (data) => 
          <div className='cuerpo4RegistryGrid'>
            <h2 className='cuerpo4RegistryGridTitle'> {data.title} </h2>
            <div className='cuerpo5RegistryGridTextButton'>
              <span className='cuerpo4RegistryGridText'> {data.descirption} </span>
              <button className='cuerpo4RegistryGridButton'>Learn more</button>
            </div>
          </div>
        )
      }
    </div>
  )
}
