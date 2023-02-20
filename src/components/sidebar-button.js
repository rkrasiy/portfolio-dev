export default function SidebarButton ({stage, click}){
    return (
        <button onClick={click} className="absolute top-4 right-4 z-[51] p-2 flex flex-col overflow-hidden ">
            <span className={`rounded-md h-[2px] w-9 bg-gray-500 mb-[7px] ${stage && "rotate-[30deg]"} transition-transform origin-top-left`}></span>
            <span className={`rounded-md h-[2px] w-9 bg-gray-500 mb-[7px] ${stage && "translate-x-[-56px]"} transition-transform`}></span>
            <span className={`rounded-md h-[2px] w-9 bg-gray-500 ${stage && "rotate-[-30deg]"} transition-transform origin-bottom-left`}></span>
        </button>
    )
}