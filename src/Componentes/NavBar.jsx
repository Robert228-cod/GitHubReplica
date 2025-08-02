import { Link, NavLink } from "react-router-dom"
import { Cuerpo2 } from "./Cuerpo2"

export const NavBar = () => {
  return (
    <div className="navbar">
        <nav>
            <div>
                <ul className="navbarContent">
                    <NavLink className="navbarText" to="/"> Overview </NavLink>
                    <NavLink className="navbarText" to="/Cuerpo2"> Repositories </NavLink>
                    <NavLink className="navbarText" to="/Cuerpo3"> Projects </NavLink>
                    <NavLink className="navbarText" to="/Cuerpo4"> Packeges </NavLink>
                    <NavLink className="navbarText" to="/Cuerpo5"> Stars </NavLink>
                </ul>
            </div>
        </nav>
    </div>
  )
}
