import Canvas from "../components/canvas/canvas";
import  { useEffect, useState } from "react";

export default function Space () {
    const [ isMovingMouse, setIsMovingMouse ] = useState(false)
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
        setIsMovingMouse(true)
    }
    const mouseLeaveHandler = (e) => {
        setIsMovingMouse(false)
    }

    const draw = (ctx ) => {
        for(let particle of particles){
            let posX,posY;
            if(isMovingMouse){
              //  console.log("Enter")
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
                    posX = particle.x - directionX;
                    posY = particle.y - directionY;
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
            }else{
                posX = particle.baseX;
                posY = particle.baseY;
            }

            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    return <div  onMouseMove={mouseMoveHandler} onMouseLeave={mouseLeaveHandler} className="overflow-hidden max-h-screen">
            <Canvas draw={draw}/>
        </div>
}