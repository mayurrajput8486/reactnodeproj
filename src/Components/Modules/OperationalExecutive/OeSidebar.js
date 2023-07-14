import { NavLink } from "react-router-dom";
import './OeSidebar.css';

const OeSidebar = () => {
    return(
        <div className="sidenav">
            <p className="oe">Operational Executive</p>
            <NavLink className="nav-item nav-link" to="/oe/oeenquirylist">Enquiry List</NavLink>
            <NavLink className="nav-item nav-link" to="/oe/registration">Registration</NavLink>
            <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
        </div>
    )
}
export default OeSidebar;