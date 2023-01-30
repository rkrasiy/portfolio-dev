import Landing from "./components/landing";
import {useRef} from "react";
import {scrollTo} from "./utils"
import Canvas from "./components/canvas/canvas";
import CanvasSection from "./components/canvas-section";


function App() {
    const menuRef = useRef();

    const scrollHandler = () =>{
        scrollTo(menuRef)
    }

    const draw = (ctx, frameCount) => {
        //frameCount = integer
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#ddd';
        ctx.beginPath();
       // console.log(frameCount)
        // const x = 10*Math.sin(frameCount*0.05)**2;
        // const y = 10*Math.sin(frameCount*0.05)**2;
        const x = (Math.random() * 100) + 1;
        const y = (Math.random() * 100) + 1;
        ctx.arc(x, y, 20, 0, Math.PI / 2);
        ctx.fill();
    }

    return (
        <div className="App">
            {/* <img src="./images/image.jpeg" id="image"/> */}
            <CanvasSection />

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
