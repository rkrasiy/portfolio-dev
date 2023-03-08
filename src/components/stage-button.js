import { useState } from "react";
import {AiOutlinePoweroff} from "react-icons/ai";
export default function StageButton ({click}){
    const [ isActive, setIsActive ] = useState(false)

    const color = isActive ? "#06b6d4" : "#6b7280"
    const clickHandler = () => {
        setIsActive(!isActive)
        click()
    }

    return (
        <div className="absolute top-1/2 z-40 left-4 translate-y-[-50%]">
            <button onClick={ clickHandler} className={`btn-toggle ${isActive ? "active" : ""}`}>
                <span >    
                    <AiOutlinePoweroff size={22} color={color} />           
                </span>
            </button>
        </div>
    )
}