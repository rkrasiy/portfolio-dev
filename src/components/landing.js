import Button from "./button";
import {SiGmail, SiGithub, SiLinkedin} from "react-icons/si";

export default function Landing(props){
    const clickHandler = ()=>{
        props.click()
    }
    const btns = [
        {href: "mailto:krasiyruslan@gmail.com", icon: SiGmail},
        {href: "https://github.com/rkrasiy", icon: SiGithub },
        {href: "https://www.linkedin.com/in/ruslan-krasiy-b7566016a", icon: SiLinkedin },
    ]

    return (
        <div className="w-full h-screen relative flex flex-row items-center justify-center bg-gray-900">
            <div className="text-center">
                {/* <div className="text-white text-5xl select-none mb-8">
                    <p>
                        Hello, I'm <span className="text-cyan-300">Ruslan Krasiy</span>.
                    </p>
                    <p>
                        I'm a front-end web developer.
                    </p>
                </div>
                <Button basic inverted className="text-2xl" onClick={clickHandler}>
                    View my work
                </Button> */}

            </div>
            <img src="./images/image.jpeg" />
        </div>
    )
}