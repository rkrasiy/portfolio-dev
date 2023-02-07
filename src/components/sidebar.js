export default function Sidebar (props) {
let classes = props.show ? "right-0" : " right-[-100%]";
    return (
        <div className={`absolute z-50 top-0 w-full h-screen bg-gray-900 ${classes} transition-all`}>

        </div>
    )
}