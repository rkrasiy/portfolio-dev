import AutoScrollingNames from "./auto-scrolling-names";

export default function PageTitle(){

    return (
        <div className="absolute top-0 left-0 h-screen w-full flex flex-row items-center justify-center text-white gap-4 text-xl z-40 select-none ">
            <p className="uppercase font-light tracking-widest text-sm">
                Frontend Developer
            </p>
            <AutoScrollingNames />
        </div>
    )
}