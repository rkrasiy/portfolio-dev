import { useState } from "react"

export default function SidebarButton (props){
    const [ active, setActive ] = useState(false);

    const clickHandler = () => {

        setActive(!active)
        props.click()
    }

    return (
        <button onClick={clickHandler} className="absolute top-4 right-4 z-[51] flex flex-col overflow-hidden ">
            <span className={`rounded-md h-[1px] w-9 bg-gray-600 mb-[7px] ${active && "rotate-[26deg]"} transition-transform origin-top-left`}></span>
            <span className={`rounded-md h-[1px] w-9 bg-gray-600 mb-[7px] ${active && "translate-x-[-56px]"} transition-transform`}></span>
            <span className={`rounded-md h-[1px] w-9 bg-gray-600 mb-[7px] ${active && "rotate-[-26deg]"} transition-transform origin-bottom-left`}></span>
        </button>
    )
}