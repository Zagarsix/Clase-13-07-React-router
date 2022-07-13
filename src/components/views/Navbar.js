import { Link, NavLink } from "react-router-dom";

const Navbar=() =>{
    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink exact activeClassName="nav-NavLink" to="/" aria-current="page">Home</NavLink>     
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="nav-NavLink" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="nav-NavLink" to="/contact">Contact</NavLink>
            </li>
        </ul>
    )
}

export default App;