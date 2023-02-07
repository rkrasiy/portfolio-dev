import ScrollingList from "./scrolling-list"
export default function Title(props){
    const clickHandler = () =>{
        props.click()
    }
    return (
        <div className="absolute top-0 left-0 h-screen w-full flex flex-row items-center justify-center text-white gap-4 text-xl z-40 select-none ">
            <p onClick={clickHandler} className="cursor-pointer">
                Frontend Developer
            </p>
            <ScrollingList />
        </div>
    )
}