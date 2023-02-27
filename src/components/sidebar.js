import SocialBtns from "./social-btns";
import Card from "./card";

export default function Sidebar (props) {
    const classes = props.show ? "right-0" : " right-[-100%]"; 

    return (
        <div className={`absolute z-50 top-0 w-full h-screen bg-gray-900 ${classes} transition-all ease-out duration-500 sm:pt-28 sm:px-24 pt-20 px-6`}>
            <div className="container h-full overflow-y-auto mx-auto">
                {/* <div className="text-white font-black text-5xl">Turnig ideas into real life <span className="header-animate">products</span> is my calling</div> */}
                <div className="flex h-full flex-col">
                    <div className="max-w-xl">
                        <div className="text-white font-black text-5xl">
                            My name is <div className="header-animate block leading-tight">Ruslan Krasiy</div>
                        </div>
                        <p className="text-white text-xl mb-4 mt-8">I'm front-end developer based in Valencia, Spain.</p>
                        <p className="text-white text-xl">I'm passionate about cutting-edge, beautiful interfaces and intuitively implemented UX.</p>
                        <div className="pt-8">
                            <SocialBtns />
                        </div>
                    </div>
                    
                    <div className="pt-6 flex-auto text-white text-xl">
                        <div className="text-3xl font-bold">PROJECTS:</div>
                        <div className="flex flex-row pt-8 gap-8">
                            {
                                projects.map( item => (
                                    <Card key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const projects = [
    {
        id: "1",
        title: "To Ukraine",
        img: "./ukranian-wreath.jpg",
        alt: "ukranian land",
        secondImg: "./logo-toukraine.png",
        secondAlt: "web icon",
        description: "React JS, Tailwind CSS, Hooks",
        github: "https://github.es",
        site: "https://toukraine.vercel.app"
    },
    {
        id: "2",
        title: "Array Sorting Methods",
        img: "./ukranian-wreath.jpg",
        alt: "ukranian land",
        secondImg: "./logo-ukraine.png",
        secondAlt: "web icon",
        description: "React JS, Hooks",
        github: "https://github.es",
        site: "https://toukraine.vercel.app"
    }
]