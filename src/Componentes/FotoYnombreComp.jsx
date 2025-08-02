import React from 'react'

export const FotoYnombreComp = ({dataUser}) => {
  return (
    <div>
        <div className='fotoPerfil'>   
            <img className='fotoBody' src={dataUser?.avatar_url} alt="foto" />
            <h3 className='nameBody'> {dataUser?.login} </h3>
            <button className='buttonPerfil'> Edit profile </button>
        </div>
    </div>
  )
}
