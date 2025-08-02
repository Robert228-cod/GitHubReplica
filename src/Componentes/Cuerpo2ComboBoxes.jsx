import React from 'react'

export const Cuerpo2ComboBoxes = () => {
  return (
    <div>
        <div className='cuerpo2InputAndButtons'>
          <div>
            <input type="text" placeholder="Find a repository..." className='cuepo2Input'/>
          </div>
          <div className='cuerpo2Buttons'>
            <select name="combo1" id="1" className='cuerpo2But'>
              <option value="" disabled selected>Type</option>
              <option value="">All</option>
              <option value="">Public</option>
              <option value="">Private</option>
              <option value="">Sources</option>
              <option value="">Forks</option>
              <option value="">Archived</option>
              <option value="">Can be sponsored</option>
              <option value="">Mirrors</option>
              <option value="">Templates</option>
            </select>
            <select name="combo2" id="2" className='cuerpo2But'>
              <option value="" disabled selected>Lenguage</option>
              <option value="">All</option>
              <option value="">Java</option>
              <option value="">JavaScript</option>
            </select>
            <select name="combo3" id="2" className='cuerpo2But'>
              <option value="" disabled selected>Sort</option>
              <option value="">Last updated</option>
              <option value="">Name</option>
              <option value="">Stars</option>
            </select>
            
            <button className='cuerpo2ButNew'>New</button> 

          </div>
        </div>  
    </div>
  )
}
