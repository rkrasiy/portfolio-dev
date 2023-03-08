import SocialBtns from "./social-btns";
import Card from "./card";
import GradientTitle from "./gradient-title";
import { projects } from "../store";

export default function Sidebar (props) {
    const classes = props.show ? "right-0" : " right-[-100%]"; 

    return (
        <div className={`absolute z-50 top-0 w-full h-screen bg-gray-900 ${classes} transition-all ease-out duration-500 sm:pt-28 sm:pl-24 sm:pr-8 pt-20 pl-6 h-full overflow-y-auto`}>
            <div className="container mx-auto pr-6 pb-12 sm:pb-28">
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
                        <GradientTitle className="text-5xl font-black">Projects</GradientTitle>
                        <div className="flex flex-col sm:flex-row flex-wrap items-center pt-8 gap-8">
                            {
                                projects.map( (item, i) => (
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