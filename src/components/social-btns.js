import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa"


export default function SocialBtns(){
    const links = [
        {id: "1", icon: <FaLinkedinIn size={22}/>, link: "https://www.linkedin.com/in/ruslan-krasiy-b7566016a/"},
        {id: "2", icon: <FaGithub size={22}/>, link: "https://github.com/rkrasiy"},
        {id: "3", icon: <FaRegEnvelope size={22}/>, link: "mailto:krasiyruslan@gmail.com"},
    ]
    return (
        <>
            {
                links.map( item => (
                    <a href={item.link} key={item.id}
                        rel="noreferrer"
                        className={`p-2 border border-gray-900 inline-block rounded-md hover:border-gray-800 text-sky-700 hover:text-sky-500`}
                        target="_blank">
                        {item.icon}
                    </a>
                ))
            }
        </>
    )
}