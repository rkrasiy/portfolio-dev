import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa"


export default function SocialBtns(){
const links = [
    {id: "1", icon: <FaLinkedinIn size={22}/>, className: "text-sky-900 hover:text-sky-800", link: "https://www.linkedin.com/in/ruslan-krasiy-b7566016a/"},
    {id: "2", icon: <FaGithub size={22}/>, className: "text-violet-900 hover:text-violet-800", link: "https://github.com/rkrasiy"},
    {id: "3", icon: <FaRegEnvelope size={22}/>, className: "text-red-900 hover:text-red-800", link: "mailto:krasiyruslan@gmail.com"},
]
    return (
        <div className="absolute top-1/2 z-40 right-4 flex flex-col translate-y-[-50%] gap-2">
            {
                links.map( item => (
                    <a href={item.link} key={item.id}
                        rel="noreferrer"
                        className={`p-2 border border-gray-900 inline-block rounded-md hover:border-gray-800 ${item.className}`}
                        target="_blank">
                        {item.icon}
                    </a>
                ))
            }
        </div>
    )
}