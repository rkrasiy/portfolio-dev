
import { useState } from "react";
import Sidebar from "./components/sidebar";
import SidebarButton from "./components/sidebar-button";

import SocialBtns from "./components/social-btns";
import Title from "./components/title";
import MouseCanvas from "./components/canvas/mouse/mouse-canvas";

export default function App() {
    const [ openMenu, setOpenMenu] = useState(false);   
    const openMenuHanlder = (e) => {
		setOpenMenu(!openMenu)
	}
    const imgSrc = window.innerWidth < 768 ? "./mobile-mask.png" : "./desktop-mask.png";

    return (
        <>
            <header>
                <SidebarButton click={openMenuHanlder} stage={openMenu} />
                <Title click={openMenuHanlder} />
            </header>
            <main className="overflow-hidden relative">
                <MouseCanvas />
                <img src={imgSrc} className="fixed top-0 left-0 h-screen right-0 bottom-0 w-full"  alt="mask"/>
                <Sidebar close={openMenuHanlder} show={openMenu} />
                <div className="absolute sm:top-1/2 top-[90%] z-40 right-1/2 sm:right-6 flex flex-row sm:flex-col translate-x-[50%] sm:translate-y-[-50%] sm:translate-x-[0%] gap-2">
                    <SocialBtns /> 
                </div>
            </main>
            
        </>
    )
};