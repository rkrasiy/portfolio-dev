import { NavLink } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./sidebar";
import SidebarButton from "./sidebar-button";
import AnimatedTitle from "./animated-title";
import Animated3DCube from "./animated-3d-cube";
import LogoWeb from "./logo-web";


export default function Navbar(props){
 	const [ openMenu, setOpenMenu] = useState(false);

    const menu = [
        {title: "Bubbles", path: "/bubble", id: "10"},   
        {title: "Mouse Effect", path: "/mouse-meteor", id: "9"},   
        {title: "Text", path: "/text", id: "11"},   
    ]

    const openMenuHanlder = (e) => {
		setOpenMenu(!openMenu)
	}

    return (
        <>
            {/* <nav ref={props.dom} className="fixed top-0 left-0 w-full z-[51] px-2 pt-4 text-right">
                <div className="flex items-center gap-4">
                    {
                        menu.map( item =>  ( 
                            <NavLink to={item.path} key={item.id}>
                                {({ isActive }) => (
                                    <span
                                        className={`text-white px-4 py-2 ${ isActive ? "border" : null}`
                                        }>
                                    {item.title}
                                    </span>
                                )}
                            </NavLink>
                        ))
                    }
                </div>
            </nav> */}
            <LogoWeb />
            <SidebarButton click={openMenuHanlder} />
            <div className="absolute top-0 left-0 h-screen w-full flex flex-row items-center justify-center text-white gap-4 text-xl z-40 select-none ">
                {/* <p className="tracking-wider">Ruslan Krasiy</p> */}
                <p onClick={openMenuHanlder} className="cursor-pointer">
                    Frontend Developer
                </p>
                {/* <Animated3DCube /> */}
                <AnimatedTitle />
            </div>
            <Sidebar close={openMenuHanlder} show={openMenu} />
        </>
    )
}