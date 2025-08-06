import React from 'react'
import { FotoYnombreComp } from './FotoYnombreComp'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { GridRepoCuerpo2 } from './GridRepoCuerpo2'

export const Cuerpo5 = () => {
  const {dataUser} = useContext(UserContext)
  return (
    <div className='cuerpo5Content'>

      <div>
        <FotoYnombreComp dataUser={dataUser}/>
      </div>

      <div className='cuerpo5ListAndStarsContent'>
        
        <div className='cuerpo5ListSort'>
          <h2 className='cuerpo5ListSortH2text'>Lists (0)</h2>
          <div className='cuerpo5SortCreate'>
            <select className='cuepo5ListSortInput'>
              <option value="" disabled selected>Sort</option>
              <option value="">Name ascending (A-Z)</option>
              <option value="">Name descending (Z-A)</option>
              <option value="">Newest</option>
              <option value="">Oldest</option>
              <option value="">Last update</option>
            </select>
            <button className='cuerpo5ListSortButton'>Create list</button>
          </div>
        </div>

        <div className='cuerpo5CreateListGrid'>
          <div>Icono</div>
          <h2 className='cuerpo3TitleText'>Create your first list</h2>
          <p>Lists make it easier to organize and curate repositories that you have starred. <a href="">Create your first list</a></p>
          <div>
            <button className='cuerpo3NewProjectButton'><span>New project</span></button>
          </div>
        </div>
        
        <div className='cuerpo5StarsSearch'>
          <h2 className='cuerpo5ListSortH2text'>Stars</h2>
          <div className='cuerpo5InputSelects'>
            <div className='cuerpo5InputAndSearchButton'>
              <input type="text" placeholder='Search stars' className='cuerpo5InputSearch'/>
              <button className='cuerpo5SearchButton'>Search</button>
            </div>
            <div className='cuerpo5SelectsButtonsContent'>
              <select className='cuerpo5SelectsButton'><option>Type: All</option></select>
              <select className='cuerpo5SelectsButton'><option>Lenguage</option></select>
              <select className='cuerpo5SelectsButton'><option>Sort by: Recently starred</option></select>
            </div>
          </div>
        </div>
        
        <div className='cuerpo5ReposWhitStars'>
          <GridRepoCuerpo2 nameRepo={'Robert228-cod / hooks_App'} lenguage={'JavaScript'} lastUpdate={'Updated on Jul 1'}/>
          <GridRepoCuerpo2 nameRepo={'midudev / aprendiendo-react'} lenguage={'TypeScript'} lastUpdate={'Updated on May 19'}/>
        </div>
      </div>
        
    </div>
  )
}
