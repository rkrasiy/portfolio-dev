import { FaGithub } from "react-icons/fa";

export default function Card ({item}) {
    return (
        <div className="flex items-center p-8 flex-wrap sm:flex-nowrap sm:flex-row w-full sm:w-auto rounded-[50px] border border-slate-700 max-w-sm sm:max-w-lg bg-gradient-to-b to-slate-900 from-slate-800 ">
            <div className="uppercase text-xs text-slate-500 tracking-widest font-semibold rotate-180 writing-tb-rl mr-8 flex-[1] sm:flex-none">
                {item.description}
            </div>
            <div className="w-48 h-96 sm:h-72 rounded-3xl overflow-hidden relative flex-[2_80%] sm:flex-none">
                <img src={item.img} className="w-full h-full absolute" alt={item.alt} />
            </div>
            <div className="h-full pl-12 mt-4 sm:mt-0 sm:pl-8 sm:flex-1 flex-[1_80%]">
                <h3 className="font-black mb-2">{item.title}</h3>
               <div className="flex flex-row sm:flex-col gap-2 justify-between">
                     <a href={item.site} className="text-blue-300 text-lg">
                        Visit the website
                    </a>
                    <a href={item.github}>
                        <FaGithub />
                    </a>
               </div>
            </div>
        </div>
    )
}