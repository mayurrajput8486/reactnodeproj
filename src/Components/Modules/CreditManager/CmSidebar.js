import { NavLink } from "react-router-dom";
import './CmSidebar.css';

const CmSidebar = () => {
    return(
        <div className="sidenav">
            <p className="cm">Credit Manager</p>
            <NavLink className="nav-item nav-link" to="/cm/document">Document List</NavLink>
            <NavLink className="nav-item nav-link" to="/cm/customerlist">Customer List</NavLink>
            <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
        </div>
    )
}
export default  CmSidebar;