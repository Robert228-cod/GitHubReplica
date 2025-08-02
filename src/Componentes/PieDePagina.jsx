import React from 'react'
import { Link, NavLink } from "react-router-dom"

export const PieDePagina = () => {
  return (
    <div className='footerGrid'>
        <div className='pieDePagina'>
            <img className='iconFooter' src="/imagenes/github.png" alt="logo" />
            <h5>© 2025 GitHub, Inc.</h5>
            <h5><NavLink className='footerText'>Terms</NavLink></h5>
            <h5><NavLink className='footerText'>Privacy</NavLink></h5>
            <h5><NavLink className='footerText'>Status</NavLink></h5>
            <h5> <NavLink className='footerText'>Docs</NavLink></h5>
            <h5><NavLink className='footerText'>Contact</NavLink></h5>
            <h5><NavLink className='footerText'>Manage cookies</NavLink></h5>
            <h5><NavLink className='footerText'>Do not share my personal information</NavLink></h5>
        </div>
    </div>
  )
}
