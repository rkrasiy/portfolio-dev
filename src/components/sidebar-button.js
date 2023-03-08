export default function SidebarButton ({stage, click}){
    let bgColor = stage ? 'bg-indigo-500' : 'bg-gray-500';
    return (
        <button onClick={click} className="absolute top-4 right-4 z-[51] p-2 flex flex-col overflow-hidden ">
            <span className={`rounded-md h-[2px] w-9 ${bgColor} mb-[7px] ${stage && "rotate-[30deg]"} transition-transform origin-top-left`}></span>
            <span className={`rounded-md h-[2px] w-9 ${bgColor} mb-[7px] ${stage && "translate-x-[-56px]"} transition-transform`}></span>
            <span className={`rounded-md h-[2px] w-9 ${bgColor} ${stage && "rotate-[-30deg]"} transition-transform origin-bottom-left`}></span>
        </button>
    )
}