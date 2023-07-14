import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav nav-pills" >
                        <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/aboutus">About Us</NavLink>
                        <NavLink className="nav-item nav-link" to="/contactus">Contact Us</NavLink>
                        <NavLink className="nav-item nav-link" to="/gallery">Gallery</NavLink>
                        {/* <NavLink className="nav-item nav-link" to="/pdf">PDF</NavLink> */}
                        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                    </div>
                </div>                
            </nav>
        </>
    );
}

export default Navbar;