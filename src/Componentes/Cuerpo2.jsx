import React, { useContext } from 'react'
import { FotoYnombreComp } from './FotoYnombreComp'
import { UserContext } from '../Context/UserContext'
import { useFetch } from '../hooks/useFetch'
import { GridRepo } from './GridRepo'
import { GridRepoCuerpo2 } from './GridRepoCuerpo2'
import { Cuerpo2ComboBoxes } from './Cuerpo2ComboBoxes'

export const Cuerpo2 = () => {
  const {dataUser} = useContext(UserContext)
  const {data} = useFetch('https://api.github.com/users/Robert228-cod/repos')

  return (
    <div className='Cuerpo2HGrid'>
      <div>
        <FotoYnombreComp dataUser={dataUser}/>
      </div>

      <div>
        
        <Cuerpo2ComboBoxes/>
        
        <div>
            {
              data?.map((repo,index) =>
                <GridRepoCuerpo2 
                  key={index} 
                  nameRepo={repo.name}
                  lenguage={repo.language}
                  visibility={repo.visibility}
                  html_url={repo.html_url}
                  lastUpdate={repo.created_at}
                />)
            }
        </div>
      </div>
    </div>
  )
}
