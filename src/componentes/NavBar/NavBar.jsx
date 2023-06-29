import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink} from "react-router-dom"

const NavBar = () => {
    const imgLogo = "../src/assets/Y-removebg-preview.png"

    return (

        <header>
            
            <Link to={"/"}>
                <img className="imgLogo" src={imgLogo} alt="Logo" />
            </Link>
            {/* <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button> */}
                <nav>
                    <ul>
                        <li  >
                            <NavLink className="enlace"  to={"/"}> Mis Productos</NavLink>
                        </li>
                        <li >
                            <NavLink className="enlace"  to={"/categoria/2"}> Ellos </NavLink>
                        </li>
                        <li >
                            <NavLink className="enlace"  to={"/categoria/3"}> Ellas </NavLink>
                        </li>
                    </ul>
                    
                </nav>
                <CartWidget />
                
            
        </header>


    )
}

export default NavBar
