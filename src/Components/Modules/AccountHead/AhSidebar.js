import { NavLink } from "react-router-dom";
import './AhSidebar.css';

const AhSidebar = () => {
    return(
        <div className="sidenav">
            <p className="ah">Account Head</p>
            <NavLink className="nav-item nav-link" to="/ah/ledger">Ledger</NavLink>
            <NavLink className="nav-item nav-link" to="/ah/loandisburst">Loan Disbursed</NavLink>
            <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
        </div>
    )
}
export default  AhSidebar;