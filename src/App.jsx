import { useState } from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { UserProvider } from './Context/UserProvider'
import { useFetch } from './hooks/useFetch.js'
import { Encabezado } from './Componentes/Encabezado.jsx'
import { Cuerpo } from './Componentes/Cuerpo.jsx'
import { PieDePagina } from './Componentes/PieDePagina.jsx'
import './App.css'
import { Cuerpo2 } from './Componentes/Cuerpo2.jsx'
import { Cuerpo3 } from './Componentes/Cuerpo3.jsx'
import { Cuerpo4 } from './Componentes/Cuerpo4.jsx'
import { Cuerpo5 } from './Componentes/Cuerpo5.jsx'


function App() {
  
  const {data} = useFetch('https://api.github.com/users/Robert228-cod')

  return (
    <UserProvider dataUser={data}>
      <div className='pagina'>

        <header className='encabezado'> <Encabezado/> </header>

        <Routes>
          <Route path='/' element = {<Cuerpo/>}/>
          <Route path='/Cuerpo2' element = {<Cuerpo2/>}/>
          <Route path='/Cuerpo3' element = {<Cuerpo3/>}/>
          <Route path='/Cuerpo4' element = {<Cuerpo4/>}/>
          <Route path='/Cuerpo5' element = {<Cuerpo5/>}/>
        </Routes>

        <footer> <PieDePagina/> </footer>
        
      </div>
    </UserProvider>
  )
}

export default App
