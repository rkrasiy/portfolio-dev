import { FaGlobe } from "react-icons/fa";

export default function Card ({item, index}) {
    return (
        <div className="flex items-center px-8 py-9 flex-row w-full sm:w-[480px] rounded-[50px] border border-slate-700 bg-gradient-to-b to-slate-900 from-slate-800 relative">
            <div className="uppercase text-[10px] leading-none text-slate-500 tracking-widest font-semibold rotate-180 writing-tb-rl mr-7">
                {item.skills}
            </div>
            <div className="flex flex-col sm:flex-row">
                <img src={item.img} className="sm:h-60 rounded-[30px] overflow-hidden sm:w-72 w-full h-full" alt="project miniatura" />
                <div className="h-full ml-0 sm:ml-8 mt-4 sm:mt-0 sm:self-baseline">
                    <h3 className="font-bold mb-6 leading-none">{item.title}</h3>
                    <p className="text-sm text-slate-400 mb-6">{item.description}</p>
                    <a href={item.site} className="inline-flex flex-row items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-3 text-[0.7125rem] font-semibold leading-5 text-white hover:bg-gray-800 uppercase">
                        <FaGlobe/>
                        Visit site
                    </a>
                </div>
            </div>
        </div>
    )
}