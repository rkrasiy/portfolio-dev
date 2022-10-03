import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./footer";
import {useRef} from "react";
import {scrollTo} from "./utils"

function App() {
    const menuRef = useRef();
    const sections = [
        {title: "About"},
        {title: "Portfolio"},
        {title: "Contact"},
    ]

    const scrollHandler = () =>{
        scrollTo(menuRef)
    }

    return (
        <div className="App">
            <Landing click={scrollHandler}/>
            <Navbar dom={menuRef} />
            {
                sections.map( sec => (
                    <Section key={sec.title} title={sec.title} />
                ))
            }
           <Footer />
        </div>
    );
}

export default App;
