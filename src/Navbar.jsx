import { Link } from "react-router-dom"
function Navbar() {
    return (
    <div>
        <h1>Navbar</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/servicios">Servicios</Link>
                </li>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/soporte">Soporte</Link>
                </li>
                <li>
                    <Link to="/portafolio" >Portafolio</Link>
                </li>
                <li>
                    <Link to="/proyecto/12345" >Proyecto Detalle</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}
export default Navbar