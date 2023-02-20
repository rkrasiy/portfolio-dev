import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa"
import SocialBtns from "./social-btns";

export default function Sidebar (props) {
    const classes = props.show ? "right-0" : " right-[-100%]"; 

    return (
        <div className={`absolute z-50 top-0 w-full h-screen bg-gray-900 ${classes} transition-all ease-out duration-500 py-28 px-24`}>
            <div className="container h-full">
                {/* <div className="text-white font-black text-5xl">Turnig ideas into real life <span className="header-animate">products</span> is my calling</div> */}
                <div className="max-w-xl">
                    <div className="text-white font-black text-5xl mb-8">
                        My name is <span className="header-animate">Ruslan Krasiy</span>
                    </div>
                    <p className="text-white text-xl mb-4">I'm front-end developer based in Valencia, Spain.</p>
                    <p className="text-white text-xl">I'm passionate about cutting-edge, beautiful interfaces and intuitively implemented UX.</p>
                </div>
                <div className="flex flex-row h-96">
                    <div className="p-4 flex-1">
                       <SocialBtns />
                    </div>
                    <div className="p-24 flex-1 text-white text-xl">
                        <div className="text-3xl font-bold">Projects:</div>
                        <div>To Ukraine</div>
                        <div>Array sort</div>
                    </div>
                </div>
            </div>
        </div>
    )
}