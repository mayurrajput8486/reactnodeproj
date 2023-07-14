import { Outlet } from "react-router-dom";
import ReSidebar from "./ReSidebar";

const ReRoot = () => {
    return(
        <>
            <ReSidebar />
            <main className="content">
                <Outlet />
            </main>
        </>
    );
}

export default ReRoot;