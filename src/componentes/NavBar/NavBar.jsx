import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink} from "react-router-dom"

const NavBar = () => {
    const imgLogo = "../src/assets/Y-removebg-preview.png"

    return (

        <header className="navbar navbar-expand-lg bg-body-white">
            
            <Link to={"/"}>
                <img className="imgLogo" src={imgLogo} alt="Logo" />
            </Link>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse Fuente" id="navbarNav">
                    <ul className="navbar-nav"  >
                        <li className="nav-item" >
                            <NavLink className="enlace" to={"/"}> Mis Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="enlace" to={"/categoria/2"}> Ellos </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="enlace" to={"/categoria/3"}> Ellas </NavLink>
                        </li>
                    </ul>
                    
                </nav>
                <CartWidget />
                
            </div>
        </header>


    )
}

export default NavBar
