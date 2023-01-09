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
        <div className="w-full h-screen flex items-center justify-center bg-gray-900">
            <div className="h-[80vh] flex flex-col items-center justify-between">
                <div className="flex flex-row justify-end w-full gap-4">
                    {
                        btns.map(btn => {
                            const Component = btn.icon
                            return (
                                <a href={btn.href} target="_blank" rel="noreferrer">
                                    <Component style={{ color: '#626262' }} size={26} />
                                </a>
                            )
                        })
                    }
                </div>
                <div className="text-center">
                    <div className="text-white text-5xl select-none mb-8">
                        <p>
                            Hello, I'm <span className="text-cyan-300">Ruslan Krasiy</span>.
                        </p>
                        <p>
                            I'm a front-end web developer.
                        </p>
                    </div>
                    {/* <Button basic inverted className="text-2xl">
                        View my work
                    </Button> */}
                </div>
                <div className="text-right">G</div>
            </div>
        </div>
    )
}