import useScroll from "../hooks/useScroll";

export default function ScrollingList(props){    
    const scroll = useScroll();
    const skils = [ "JavaScript" , "React JS" , "Next JS", "HTML/CSS", "Mongo DB" ];
    return (
        <div className="overflow-hidden h-8 px-4 w-32 relative border-l-2 border-slate-500">
           <div ref={scroll} className="flex flex-col absolute transition-transform duration-1000 ease text-sm font-bold1 tracking-widest text-slate-400 uppercase">
                {
                    skils.map( item => (
                        <div key={item} className="py-2">{item}</div>
                    ))
                }
           </div>
        </div>
    )
}