import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import SidebarButton from "../components/sidebar-button";
import LogoWeb from "../components/logo-web";
import SocialBtns from "../components/social-btns";
import Title from "../components/title";

const Layout = () => {
    const [ openMenu, setOpenMenu] = useState(false);   

    const openMenuHanlder = (e) => {
		setOpenMenu(!openMenu)
	}
    return (
        <>
            <header>
                <LogoWeb />
                <SidebarButton click={openMenuHanlder} />
                <Title click={openMenuHanlder} />
            </header>
            <main className="overflow-hidden relative">
                <Outlet />
                <img src="./mask2a.png" className="fixed top-0 left-0 h-screen right-0 bottom-0 w-full"  alt="mask"/>
                <Sidebar close={openMenuHanlder} show={openMenu} />
                <SocialBtns />
            </main>
        </>
    )
};

export default Layout;