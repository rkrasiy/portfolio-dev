import useScroll from "../hooks/useScroll";

export default function AnimatedTitle(props){
    let posY;

    
    const scroll = useScroll();

    return (
        <div className="overflow-hidden h-5 px-4  w-32 relative border-l-2">
           <div ref={scroll} className="flex flex-col absolute transition-transform duration-700 ease-out text-sm font-bold tracking-wider text-slate-400 uppercase">
                <div>React JS</div>
                <div>JavaScript</div>
                <div>Next JS</div>
                <div>HTML/CSS</div>
                <div>Node JS</div>
                <div>Mongo DB</div>
           </div>
        </div>
    )
}