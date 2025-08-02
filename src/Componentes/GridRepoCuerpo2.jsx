export const GridRepoCuerpo2 = ({index, nameRepo, lenguage, visibility, html_url,lastUpdate}) => {
  return (
    <div>

      <div className='cuerpo2ReposGrid'>

        <div className="cuerpo2GridFL">
          <div className="cuerpo2NameRepo">
            <a className="cuerpo2RepoLink" href={html_url}>{nameRepo}</a>
            <span>{visibility}</span>
          </div>
          <div className="cuerpo2ButtonsStarCombo">
            <button className="cuerpo2starButton">Star</button>
            <select name="starCombo" id="1sc" className="cuerpo2ComboBox">  
            </select>      
          </div>
        </div>
        
        <div className="cuerpo2lenguageRow">
          <span>{lenguage}</span>
          <span>{lastUpdate}</span>
        </div>

      </div>
    </div>
  )
}