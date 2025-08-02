import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { useFetch } from '../hooks/useFetch'
import { GridRepo } from './GridRepo'
import { FotoYnombreComp } from './FotoYnombreComp'

export const Cuerpo = () => {

    const {dataUser} = useContext(UserContext)
    const {data} = useFetch('https://api.github.com/users/Robert228-cod/repos')

  return (
    <div className='gridContent'>
        <div className='perfilYRepos'>
          <FotoYnombreComp dataUser={dataUser}/>

          <div className='repositorios'>
              {
                data?.map((repo,index) => index < 8 &&
                  <GridRepo 
                    key={index} 
                    nameRepo={repo.name}
                    lenguage={repo.language}
                    visibility={repo.visibility}
                    html_url={repo.html_url}
                  />)
              }
          </div>
        </div>
    </div>
  )
}
