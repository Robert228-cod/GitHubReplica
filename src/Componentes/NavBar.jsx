import { Link, NavLink } from "react-router-dom"
import { Cuerpo2 } from "./Cuerpo2"
import { VscGithubProject } from "react-icons/vsc";
import { IoBookOutline } from "react-icons/io5";
import { LuBookMarked } from "react-icons/lu";
import { GrCube } from "react-icons/gr";
import { CiStar } from "react-icons/ci";

export const NavBar = () => {
  return (
    <div className="navbar">
        <nav>
            <div>
                <ul className="navbarContent">
                    <NavLink className="navbarText" to="/"><IoBookOutline /> Overview </NavLink>
                    <NavLink className="navbarText" to="/Cuerpo2"><LuBookMarked /> Repositories </NavLink>
                    <NavLink className="navbarText" to="/Cuerpo3"><VscGithubProject className="className='cuerpo3CreateProjectIcon'" /> Projects </NavLink>
                    <NavLink className="navbarText" to="/Cuerpo4"><GrCube /> Packeges </NavLink>
                    <NavLink className="navbarText" to="/Cuerpo5"><CiStar /> Stars </NavLink>
                </ul>
            </div>
        </nav>
    </div>
  )
}
