import ImageCanvas from "../components/canvas/imageCanvas";
import  { useEffect } from "react";

export default function Image () {
    //const [particles, setParticles] = useState([])
    // const particles = [];
    const text = "Ruslan";

    // useEffect(()=>{
    //     for(let i = 0; i < 1000; i++){
    //         const x = Math.random() * window.innerWidth;
    //         const y = Math.random() * window.innerHeight;
    //         const particle = {
    //             x: x,
    //             y: y,
    //             size: 3,
    //             baseX: x,
    //             baseY: y,
    //             density: (Math.random() * 30) + 1
    //         }
    //         particles.push(particle)
    //     }

    // })


    const mouse = {
        x: null,
        y: null,
        radius: 150
    }

    const mouseMoveHandler = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.radius = 30
    }

    const touchHandler = (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y =e.touches[0].clientY;
        mouse.radius = 60;
    }

    const draw = (ctx, particlesArray ) => {
    //console.log(particles)
         for(let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.5
            particlesArray[i].draw();
        }
    }

    return (
        <div 
            onMouseMove={mouseMoveHandler} 
            onTouchMove={touchHandler} 
            className="overflow-hidden max-h-screen">
           
            <ImageCanvas draw={draw}/>
        </div>
    )
}