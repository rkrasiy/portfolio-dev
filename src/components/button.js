export default function Button (props){
    let classes = "px-4 py-2 border border-2";
    if(props.basic){
        classes += " bg-transparent"
    }
    if(props.inverted){
        classes += " text-white border-white"
    }
    if(props.className){
        classes += " " + props.className
    }
    return (
        <button className={classes}>
            {props.children}
        </button>
    )
}