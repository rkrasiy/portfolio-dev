import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/sidebar";
import LogoWeb from "../components/logo-web";
import SidebarButton from "../components/sidebar-button";

import PageTitle from "../components/page-title";
import SocialBtns from "../components/social-btns";

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
            </header>
            <main>
                <Sidebar close={openMenuHanlder} show={openMenu} />
                <PageTitle />
                <Outlet />
                <SocialBtns />
            </main>
            
        </>
    )
};

export default Layout;