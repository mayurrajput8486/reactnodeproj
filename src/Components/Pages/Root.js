import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const RootLayout = () => {
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default RootLayout;