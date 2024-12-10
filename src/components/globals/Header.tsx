import { NavLink } from "react-router-dom"
import "../../styles/header.css"
import ToggleTheme from "../ToggleTheme"

function Header() {
  return (
    <>
    <header>
    <nav>
        <img src="https://m.media-amazon.com/images/I/71Cd5DDnL4L._AC_SL1500_.jpg" alt="logo of the website"/>
        <ul>
          <NavLink to={"/"}>
            <li>
            Accueil
          </li>
          </NavLink>
          <NavLink to={"/login"}>
            <li>
              Connexion
            </li>
          </NavLink>
        </ul>
      </nav>
      <ToggleTheme />
    </header>
     
    </>
  )
}

export default Header