import CartWidget from "./CartWidget"
import "./Nav.scss"
import { Link } from "react-router-dom"

const Nav = ({ links }) => {

    if (links) {
        return (
            <nav>
                {links.map((elemento, indice) => {
                    return <Link key={indice} to={`/categoria/${elemento}`} className="nav__link">
                        {elemento}
                    </Link>
                })}


                <CartWidget className="nav__icon" />
            </nav>
        )
    } else return null





}

export default Nav
