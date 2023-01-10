import Canvas from "../components/canvas/canvas";
import  { useEffect } from "react";

export default function Space2 () {
    //const [particles, setParticles] = useState([])
    const particles = [];
    const text = "Ruslan";

    useEffect(()=>{
        for(let i = 0; i < 100; i++){
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const particle = {
                x: x,
                y: y,
                size: 3,
                baseX: x,
                baseY: y,
                density: (Math.random() * 30) + 1
            }
            particles.push(particle)
        }

    })


    const mouse = {
        x: null,
        y: null,
        radius: 40
    }

    const mouseMoveHandler = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }


    const draw = (ctx ) => {
        let count = 0;
        for(let particle of particles){
            count += 36;
            const tr = particle.y / Math.tan(30);
            const x = particle.x - tr;
            const dx = (particle.x + x) / 2;

            let rMin= mouse.x - mouse.radius;
            let rMax = mouse.x + mouse.radius;

            let opacity = ".03";
            if (dx > rMin && dx < rMax) {
               opacity = ".25"
            }

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineWidth = 2
            ctx.lineTo(x, 0);   
            ctx.strokeStyle  = `rgba(255, 255, 255, ${opacity})`;
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = `hsl(${count} , 100%, 50%)`;
            ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    return (
        <div onMouseMove={mouseMoveHandler} className="overflow-hidden max-h-screen">
            <Canvas draw={draw}/>
        </div>
    )
}