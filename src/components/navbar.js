import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar(props){
 	const [ openMenu, setOpenMenu] = useState(false);

    const menu = [
        {title: "Mouse Meteor", path: "/mouse-meteor", id: "9"},   
        {title: "Bubble", path: "/bubble", id: "10"},   
        {title: "Text", path: "/text", id: "11"},   
    ]

    const openMenuHanlder = (e) => {
		setOpenMenu(!openMenu)
	}

    const activeClassName = "text-red-600 ";

    return (
        <>
            <nav ref={props.dom} className="fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto">
                <ul className="flex items-center gap-4">
                    {menu.map( (item) => {
                        return <li key={item.title} >
                            <NavLink 
                                to={item.path} 
                                className={
                                    ({ isActive }) => isActive ? activeClassName : undefined
                                }>
                                {item.title}</NavLink>
                        </li>
                    })}
                </ul>
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
