import { FaGithub } from "react-icons/fa"

export default function Card ({item}) {
    return (
        <div className="flex items-center p-8 rounded-[50px] border border-slate-700 max-w-lg bg-gradient-to-b to-slate-900 from-slate-800 ">
            <div className="uppercase text-xs text-slate-500 tracking-widest font-semibold rotate-180 writing-tb-rl mr-8">
                {item.description}
            </div>
            <div className="w-48 h-72 rounded-3xl overflow-hidden group relative bg-black">
                <img src={item.img} className="w-full h-full group-hover:opacity-0  transition-opacity duration-700 relative z-10" alt={item.alt} />
                <img src={item.secondImg} className="w-full top-0 absolute z-0" alt={item.alt} />
            </div>
            <div className="h-full pl-8 flex-1">
                <h3 className="font-extrabold">{item.title}</h3>
                <a href={item.site}>
                    Visit the website
                </a>
                <a href={item.github}>
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}