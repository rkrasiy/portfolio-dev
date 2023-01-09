import Landing from "./components/landing";
import {useRef} from "react";
import {scrollTo} from "./utils";
//import CircularImage from "./components/circular-text";

function App() {
    const menuRef = useRef();

    const scrollHandler = () =>{
        scrollTo(menuRef)
    }

    return (
        <div className="App">
            <Landing  click={scrollHandler}/>
        </div>
    );
}

export default App;
