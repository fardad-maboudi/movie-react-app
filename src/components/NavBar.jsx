import { Link } from "react-router-dom"
import "../css/Navbar.css"
// import {loadPopularMovies} from "../pages/Home"
function NavBar ({movie_app,home}) {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" onClick={() => window.location.reload()} >{movie_app}</Link>
                {/* <button onClick={() => window.location.reload()}>Movie App</button> */}
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">{home}</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                
            </div>
        </nav>
    )

}

export default NavBar