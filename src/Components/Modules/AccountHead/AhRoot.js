import { Outlet } from "react-router-dom";
import AhSidebar from "./AhSidebar";

const AhRoot = () => {
    return(
        <>
            <AhSidebar />
            <main className="content">
                <Outlet />
            </main>
        </>
    );
}

export default AhRoot;