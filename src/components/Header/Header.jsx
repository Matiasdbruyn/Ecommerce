import "./Header.css"
import Carrito from "../Carrito/Carrito";
import { NavLink, Link } from 'react-router-dom'
import { ThemeButton } from "../ThemeButton/ThemeButton";
import { useTheme } from "../../context/ThemeContext";


function Header({ cardcount, titulo }) {
    const {darkMode} = useTheme()
    return (
        <div className="header">
            <Link to="/" className="logo">{titulo}</Link>
            <nav className="nav">
                <NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/category/Cafe Molido Fino">Molido Fino</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/category/Cafe Molido Medio">Molido Medio</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/category/Cafe Molido Grueso">Molido Grueso</NavLink>
                <NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to="/category/Cafe Grano Entero">Grano entero</NavLink>
            </nav>
            <div className="carrito">
                <Carrito cardcount={cardcount} />
                <ThemeButton/>
            </div>
        </div>
    )
}

export default Header