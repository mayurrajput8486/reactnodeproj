import { NavLink } from "react-router-dom";
import './ReSidebar.css';

const ReSidebar = () => {
    return(
        <div className="sidenav">
            <p className="re">Regional Executive</p>
            <NavLink className="nav-item nav-link" to="/re/enquirycreate">Add Enquiry</NavLink>
            <NavLink className="nav-item nav-link" to="/re/enquirylist">Enquiry List</NavLink>
            <NavLink className="nav-item nav-link" to="/re/cibilscorelist">Cibil Score List</NavLink>
            <NavLink className="nav-item nav-link" to="/re/sanctionletter">Sanction Letter Confirmation</NavLink>
            <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
        </div>
    );
}

export default ReSidebar;