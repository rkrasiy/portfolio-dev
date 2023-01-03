import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;