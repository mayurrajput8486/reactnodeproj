import { Outlet } from "react-router-dom";
import CmSidebar from "./CmSidebar";

const CmRoot = () => {
    return(
        <>
            <CmSidebar />
            <main className="content">
                <Outlet />
            </main>
        </>
    );
}

export default CmRoot;