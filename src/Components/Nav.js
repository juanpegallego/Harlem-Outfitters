import CartWidget from "./CartWidget"
import "./Nav.scss"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { contexto } from './AppContext'

const Nav = ({ links }) => {

    const test = useContext(contexto)

    const { cantidad_total } = test

    if (links) {
        return (
            <nav >
                <Link to={'/carrito'} >
                    <CartWidget />
                    {cantidad_total}
                </Link>

                {links.map((elemento, indice) => {
                    return <Link key={indice} to={`/categoria/${elemento}`} >
                        {elemento}
                    </Link>
                })}

            </nav>
        )
    } else return null





}

export default Nav
