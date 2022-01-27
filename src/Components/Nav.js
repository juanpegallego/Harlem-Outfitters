import CartWidget from "./CartWidget"
import "./Nav.scss"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { contexto } from './AppContext'

const Nav = ({ links }) => {


    const { cantidad_total } = useContext(contexto)


    if (links) {
        return (
            <nav >
                <Link to={'/cart'} >
                    {cantidad_total > 0 ? <CartWidget cantidad_total={cantidad_total} /> : null}
                </Link>

                {links.map((elemento, indice) => {
                    return <Link key={indice} to={`/${elemento.toLowerCase()}`} >
                        {elemento}
                    </Link>
                })}

            </nav>
        )
    } else return null







}

export default Nav
