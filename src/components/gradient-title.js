export default function GradientTitle (props){
    return (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-pink-200 font-extrabold">
            { props.children }
        </span>
    )
}