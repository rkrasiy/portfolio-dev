import Canvas from "./canvas/canvas";
import  {useState, useEffect} from "react";

export default function CanvasSection () {

    //const [particles, setParticles] = useState([])
    const particles = [];
    const text = "Ruslan";

    useEffect(()=>{
        for(let i = 0; i < 1000; i++){
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
        radius: 150
    }

    const mouseMoveHandler = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }
    
    const draw = (ctx, frameCount) => {
        for(let particle of particles){

            if(mouse.x){
                let dx = mouse.x - particle.x;
                let dy = mouse.y - particle.y;
                let distance = Math.sqrt( dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;


                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * particle.density;
                let directionY = forceDirectionY * force * particle.density;

                if(distance < mouse.radius) {
                    particle.x -= directionX;
                    particle.y -= directionY;
                }else{
                    if(particle.x !== particle.baseX){
                        const dx = particle.x - particle.baseX;
                        particle.x -= dx/5;
                    }
                    if(particle.y !== particle.baseY){
                        const dy = particle.y - particle.baseY;
                        particle.y -= dy/5;
                    }
                }
            }

            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    return <section  onMouseMove={mouseMoveHandler}>
            <Canvas draw={draw}/>
        </section>
}