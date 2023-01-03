import { NavLink } from "react-router-dom"


export default function Navbar(props){

    const menu = [
        {title: "Home", path: "/", id:"1"},
        {title: "Blogs", path: "/blogs",id: "2"},
        {title: "Contact", path: "/contact", id: "3"},   
        {title: "Space", path: "space", id: "4"},   
    ]

    const activeClassName = "text-red-600"
    return (
        <nav ref={props.dom} className="fixed top-0 left-0 w-full bg-slate-600">
            <div className="container mx-auto">
                <ul className="flex items-center gap-4">
                    {menu.map( item => {
                        return <li key={item.id} >
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
    )
}

/*
*
<li className="p-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-2">
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li className="p-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="group hover:bg-gray-500 p-2 pr-6 dropdown-item">
                        <span>Canvas</span>
                        <i className="rotate-[-225deg] group-hover:rotate-[-135deg] transition-all translate-y-[5px] translate-x-2 origin-center"></i>
                        <div className="group-hover:block hidden absolute bg-slate-300 p-4 left-0 top-full min-w-full">
                            <ul>
                                <li><Link to="/space" >Space</Link></li>
                            </ul>
                        </div>
                    </li>
*/