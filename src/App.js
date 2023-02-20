
import { useState } from "react";
import Sidebar from "./components/sidebar";
import SidebarButton from "./components/sidebar-button";
import LogoWeb from "./components/logo-web";
import SocialBtns from "./components/social-btns";
import Title from "./components/title";
import MouseCanvas from "./components/canvas/mouse/mouse-canvas";
import BubbleCanvas from "./components/canvas/bubble/bubble-canvas";
import StageButton from "./components/stage-button";

export default function App() {
    const [ openMenu, setOpenMenu] = useState(false);   
    const [ stage, setStage] = useState(false);   

    const openMenuHanlder = (e) => {
		setOpenMenu(!openMenu)
	}

    return (
        <>
            <header>
                <LogoWeb />
                <SidebarButton click={openMenuHanlder} stage={openMenu} />
                <Title click={openMenuHanlder} />
            </header>
            <main className="overflow-hidden relative">
                {
                    stage ? <BubbleCanvas /> :  <MouseCanvas /> 
                }
               <img src="./mask2a.png" className="fixed top-0 left-0 h-screen right-0 bottom-0 w-full"  alt="mask"/>
                <Sidebar close={openMenuHanlder} show={openMenu} />
                <div className="absolute sm:top-1/2 top-[90%] z-40 left-1/2 sm:left-[95%] flex flex-row sm:flex-col translate-x-[-50%] sm:translate-y-[-50%] gap-2">
                    <SocialBtns /> 
                </div>
                {/* <StageButton click={()=>setStage(!stage)} /> */}
            </main>
            
        </>
    )
};