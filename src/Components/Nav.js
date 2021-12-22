import CartWidget from "./CartWidget"
import "./Nav.scss"


const Nav = () => {
    
    return (
        <nav>
            <h3>Harlem Outfitters</h3>
            <CartWidget className="nav__icon" />
        </nav>
    )
}

export default Nav
