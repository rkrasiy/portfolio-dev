import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./footer";
import {useRef} from "react";
import {scrollTo} from "./utils"
import Canvas from "./components/canvas/canvas";
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
    
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#ddd';
        ctx.beginPath();
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI);
        ctx.fill();
    }

    return (
        <div className="App">
            <Canvas draw={draw}/>
            {/* <Landing click={scrollHandler}/>
            <Navbar dom={menuRef} />
            {
                sections.map( sec => (
                    <Section key={sec.title} title={sec.title} />
                ))
            }
           <Footer /> */}
        </div>
    );
}

export default App;
