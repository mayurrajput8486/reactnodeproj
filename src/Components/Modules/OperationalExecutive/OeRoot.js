import { Outlet } from "react-router-dom";
import OeSidebar from "./OeSidebar";

const OeRoot = () => {
    return(
        <>
            <OeSidebar />
            <main className="content">
                <Outlet />
            </main>
        </>
    );
}

export default OeRoot;