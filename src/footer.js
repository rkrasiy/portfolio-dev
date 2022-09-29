import {SiFacebook, SiLinkedin, SiGithub } from "react-icons/si";
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import {BsChevronDoubleUp} from "react-icons/bs";

export default function Footer() {
    const scrollTop = (e) => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    return (
        <footer className="bg-gray-900 text-center px-4 pt-12 pb-4 relative">
            <button onClick={scrollTop} className="px-2 py-4 bg-red-500 shadow-sm absolute top-[-30px] left-[50%] translate-x-[-50%]">
                <BsChevronDoubleUp style={{ color: "#fff" }} size={24} />
            </button>
            <div>
                {
                    [
                        {
                            id: "1",
                            icon: <SiFacebook style={{ color: 'white' }} />
                        }, {
                            id: "2",
                            icon: <SiLinkedin style={{ color: 'white' }} />
                        }, {
                            id: "3",
                            icon: <SiGithub style={{ color: 'white' }} />
                        }
                    ].map(btn => (
                        <button key={btn.id} className="px-2 py-3 bg-slate-800 m-2 shadow-md text-xl">
                            {btn.icon}
                        </button>
                    ))
                }
                <div className="mt-4">
                    <span className="text-gray-500 uppercase text-sm">
                        Ruslan Krasiy
                    </span>
                    <span className="text-red-900 ml-1 text-xl">
                        <AiOutlineCopyrightCircle style={{ display: "inline-block" }} />2022
                    </span>
                </div>
            </div>
        </footer>
    )
}