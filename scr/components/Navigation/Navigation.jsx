import { NavLink, useLocation } from "react-router-dom"
import css from "./Navigation.module.css"

export default function Navigation() {
    const location = useLocation()
    return <nav>
        <ul className={css.navigationList}>
            <NavLink className={css.navigationLink} to='/' state={location}>Home</NavLink>
            <NavLink className={css.navigationLink} to='/movies' state={location}>Movies</NavLink>
        </ul>
    </nav>
}