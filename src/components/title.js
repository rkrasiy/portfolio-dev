import GradientTitle from "./gradient-title"
import ScrollingList from "./scrolling-list"
export default function Title(props){
    const clickHandler = () =>{
        props.click()
    }
    return (
        <div className="absolute top-0 left-0 h-screen w-full flex flex-row items-center justify-center text-slate-400 gap-4  z-40 select-none ">
            <p onClick={clickHandler} className="text-2xl">
                <GradientTitle>Front-end developer</GradientTitle>
            </p>
            <ScrollingList />
        </div>
    )
}