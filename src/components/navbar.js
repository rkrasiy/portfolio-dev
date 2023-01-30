import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar(props){
 	const [ openMenu, setOpenMenu] = useState(false);

    const menu = [
        {title: "Bubbles", path: "/bubble", id: "10"},   
        {title: "onMouseMove", path: "/mouse-meteor", id: "9"},   
        {title: "Text", path: "/text", id: "11"},   
    ]

    const openMenuHanlder = (e) => {
		setOpenMenu(!openMenu)
	}

    return (
        <>
            <nav ref={props.dom} className="fixed top-0 left-0 w-full z-50 p-4">
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
        </nav>
         <div className="absolute top-0 left-0 h-screen w-full flex flex-row items-center justify-center text-white gap-4 text-lg z-40">
				<p>Ruslan Krasiy</p>
				<p onClick={openMenuHanlder} className="cursor-pointer">Fronend Developer</p>
			</div>
			{
				openMenu && <div className="absolute z-50 top-0 right-0 w-1/2 h-screen bg-slate-400"></div>
			}
        </>
    )
}