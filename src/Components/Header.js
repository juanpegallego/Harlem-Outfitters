import Nav from "./Nav";
import "./Header.scss"
import { Link } from "react-router-dom";

const Header = () => {


    const links = ['Como comprar', 'Nosotros']
    const titulo = 'Harlem Outfitters'

    return (
        <header className="header">
            <Link to='/'>
                <h1>{titulo}</h1>
            </Link>

            <Nav
                links={links}
            />

        </header>
    )
}

export default Header
